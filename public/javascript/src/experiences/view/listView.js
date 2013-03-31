define([
    'tpl!../templates/list.html',
    'vendor/underscore',
    'vendor/backbone'
], function (tpl, _, Backbone) {

    var ListView = Backbone.View.extend({
        className: 'experiences list',
        render: function () {
            this.$el.html(tpl(this.getViewData()));
            return this;
        },
        getViewData: function () {
            return {
                experiences: this.model.toJSON()
            };
        }
    });

    return ListView;
});
