// public/javascripts/config.js
requirejs.config({
    // load foundation and application kernel
    deps: ['foundation/app', 'app/kernel'],
    baseUrl: '/javascript/',
    paths: {
        // `vendor` libs are located under `baseUrl`vendor
        'vendor': 'vendor',
        // `app` module is located under `baseUrl`src
        'app': 'src',
        // `foundation stuff is located under `baseUrl`foundation
        'foundation': 'foundation',
        // templates are located into `baseUrl`src/templates
        'templates': 'src/templates'
    },
    map: {
        '*': {
            // `vendor/jquery` can either refer to jquery or zepto
            'vendor/jquery': 'vendor/zepto',
            // To use lodash instead of underscore
            'vendor/underscore': 'vendor/lodash.underscore',
            // require plugins
            'tpl': 'vendor/requirejs/tpl',
            'i18n': 'vendor/requirejs/i18n',
            'text': 'vendor/requirejs/text'
        }
    },
    shim: {
        'vendor/moment': {
            exports: 'moment'
        },
        'vendor/jquery': {
            exports: '$'
        },
        'vendor/zepto': {
            exports: 'Zepto'
        },
        'vendor/backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['vendor/underscore', 'vendor/jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'vendor/lodash.underscore': {
            exports: '_'
        },
        'vendor/underscore': {
            exports: '_'
        },
        'vendor/handlebars': {
            exports: 'Handlebars'
        },
 
        'foundation/foundation.alerts': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.clearing': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.cookie': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.dropdown': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.forms': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.joyride': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation': {
            deps: ['vendor/jquery']
        },
 
        'foundation/foundation.magellan': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.orbit': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.placeholder': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.reveal': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.section': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.tooltips': {
            deps: ['foundation/foundation']
        },
 
        'foundation/foundation.topbar': {
            deps: ['foundation/foundation']
        }
    }
});
