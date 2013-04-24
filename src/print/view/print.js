define([
    'tpl!../templates/print.html',
    'tpl!app/skills/templates/list.html',
    'tpl!app/experiences/templates/list.html',
    'vendor/underscore',
    'vendor/backbone'
], function (tpl, skillsTpl, experienceTpl, _, Backbone) {

    var Print = Backbone.View.extend({
        render: function () {
            this.$el.html(tpl(this.getViewData()));
            return this;
        },
        getViewData: function () {
            return {
                experiences: experienceTpl({
                    experiences: this.model.get('experiences').toJSON()}),
                skills: skillsTpl({
                    skillGroups: this.model.get('skillGroups').toJSON()})
            };
        }
    });

    return Print;
});
