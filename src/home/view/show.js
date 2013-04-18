define([
    'tpl!../templates/show.html',
    'vendor/underscore',
    'vendor/backbone'
], function (tpl, _, Backbone) {

    var Show = Backbone.View.extend({
        className: "home",
        render: function () {
            this.$el.html(tpl(this.getViewData()));
            return this;
        },
        getViewData: function () {
            return {
                experiences: _.head(this.model.get('experiences').toJSON(), 5)
            };
        }
    });

    return Show;
});
