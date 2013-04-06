define([
    'tpl!../templates/show.html',
    'vendor/underscore',
    'vendor/backbone'
], function (tpl, _, Backbone) {

    var Show = Backbone.View.extend({
        className: 'experiences show',
        render: function () {
            this.$el.html(tpl(this.getViewData()));
            return this;
        },
        getViewData: function () {
            return this.model.toJSON();
        }
    });

    return Show;
});
