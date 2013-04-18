define([
    'module',
    'text',
    'vendor/underscore',
    'vendor/handlebars'
], function (module, text, _, Handlebars) {
    'use strict';
    var buildMap = [];
    var hasLocation = typeof location !== 'undefined' && location.href;
    var masterConfig = (module.config && module.config()) || {};

    var tpl = {
        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(Handlebars.compile(content));
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName);

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation) {
                text.get(url, function (content) {
                    tpl.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req(["text!"+nonStripName], function (content) {
                    tpl.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },
        write: function dowrite(pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(['vendor/handlebars'], function (Handlebars) {" +
                               " return Handlebars.compile('" +
                                   content +
                               "');});\n");
            }
        }
    };

    return tpl;

});
