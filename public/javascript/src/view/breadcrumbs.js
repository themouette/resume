define([
    'tpl!app/templates/breadcrumbs.html',
    'vendor/underscore',
    'vendor/backbone'
], function (tpl, _, Backbone) {

    var Breadcrumbs = Backbone.View.extend({
        initialize: function () {
            this.model = new Backbone.Model({
                'links': []
            });
        },

        render: function () {
            this.$el.html(tpl(this.getViewData()));
            return this;
        },
        getViewData: function () {
            return this.model.toJSON();
        },

        replace: function () {
            this.model.set('links', arguments);
        }
    });

    return Breadcrumbs;
});
