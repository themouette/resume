define([
    'vendor/underscore',
    'vendor/backbone',
    'app/router',
    'app/data',
    './view/list',
    './view/show'
], function (_, Backbone, Router, data, ListView, ShowView) {

    var skills = new Backbone.Collection(data.skills);
    var experiences = new Backbone.Collection(data.experiences);
    var skillGroups = new Backbone.Collection(data.skillGroups);
    var views = {};

    var Skills = Router.extend({

        routes: {
            'skills': "list",
            'skills/:skill': "showOne"
        },

        list: function () {
            if (!views.list) {
                views.list = new ListView({
                    model: skillGroups
                });
            }
            Backbone.trigger('ui:canvas:content', views.list.render().$el);
            this.selectMenu();
        },

        showOne: function (id) {
            var skill = skills.get(id);
            var view = new ShowView({
                model: skill,
                related: relatedExperiences(skill.get('id'), experiences)
            });
            Backbone.trigger('ui:canvas:content', view.render().$el);
            this.selectMenu();
        },

        selectMenu: function () {
            Backbone.trigger('ui:canvas:navigate', '.skills');
        }
    });

    function relatedExperiences (skill_id, experiences) {
        var res = [];
        experiences.each(function (experience) {
            if (-1 !== _.indexOf(experience.get('skills'), skill_id)) {
                res.push(experience.toJSON());
            }
        });

        return res;
    }

    return Skills;
});
