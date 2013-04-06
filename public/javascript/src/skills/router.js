define([
    'vendor/underscore',
    'vendor/backbone',
    'app/router',
    'app/data',
    './view/list',
    './view/show'
], function (_, Backbone, Router, data, ListView, ShowView) {

    var skills = new Backbone.Collection(data.skills);
    var views = {};

    var Skills = Router.extend({

        routes: {
            'skills': "list",
            'skills/:skill': "showOne"
        },

        list: function () {
            if (!views.list) {
                views.list = new ListView({
                    model: skills
                });
            }
            Backbone.trigger('ui:canvas:content', views.list.render().$el);
            this.selectMenu();
        },

        showOne: function (id) {
            var view = new ShowView({
                model: skills.get(id)
            });
            Backbone.trigger('ui:canvas:content', view.render().$el);
            this.selectMenu();
        },

        selectMenu: function () {
            Backbone.trigger('ui:canvas:navigate', '.skills');
        }
    });

    return Skills;
});
