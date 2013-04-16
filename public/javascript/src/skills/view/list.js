define([
    'tpl!../templates/list.html',
    'vendor/underscore',
    'vendor/backbone'
], function (tpl, _, Backbone) {

    var List = Backbone.View.extend({
        className: "skills-list",
        render: function () {
            this.$el.html(tpl(this.getViewData()));
            return this;
        },
        getViewData: function () {
            return {
                skillGroups: this.model.toJSON()
            };
        }
    });

    return List;
});
