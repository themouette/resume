define([
    'tpl!templates/canvas.html',
    'vendor/underscore',
    'vendor/backbone',
    'app/view/header',
    'app/view/footer'
], function (tpl, _, Backbone, Header, Footer) {

    var Canvas = Backbone.View.extend({
        initialize: function () {
            this.views = {
                header: new Header(),
                footer: new Footer()
            };
            Backbone.on('ui:canvas:navigate',
                    _.bind(this.views.header.navigate, this.views.header));
            Backbone.on('ui:canvas:content',
                    _.bind(this.replaceMainContent, this));
        },
        render: function () {
            this.$el.html(tpl(this.getViewData()));
            this.views.header.setElement(this.$('body > header')).render();
            this.views.footer.setElement(this.$('body > footer')).render();
            return this;
        },
        getViewData: function () {
            return {};
        },
        replaceMainContent: function ($el, empty) {
            var $main = this.$('section#main');
            if (false !== empty) {
                $main.empty();
            }
            $main.append($el);
        },

        // link event delegation for subviews
        undelegateEvents: function () {
            _.each(this.views, function (view) {
                view.undelegateEvents.call(view);
            });
            Backbone.View.prototype.undelegateEvents.call(this);
        },
        delegateEvents: function () {
            Backbone.View.prototype.delegateEvents.call(this);
            _.each(this.views, function (view) {
                view.delegateEvents.call(view);
            });
        }
    });

    return Canvas;
});
