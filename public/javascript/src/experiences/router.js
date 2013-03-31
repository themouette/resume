define([
    'vendor/underscore',
    'vendor/backbone',
    'app/router',
    'app/data',
    './view/listView',
    './view/show'
], function (_, Backbone, Router, data, ListView, ShowView) {

    var experiences = new Backbone.Collection(data.experiences);
    var views = {};

    var Experiences = Router.extend({

        routes: {
            'experiences': "list",
            'experiences/:experience': "showOne"
        },

        list: function () {
            if (!views.list) {
                views.list = new ListView({
                    model: experiences
                });
            }
            Backbone.trigger('ui:canvas:content', views.list.render().$el);
            this.selectMenu();
        },

        showOne: function (id) {
            var view = new ShowView({
                model: experiences.get(id)
            });
            Backbone.trigger('ui:canvas:content', view.render().$el);
            this.selectMenu();
        },

        selectMenu: function () {
            Backbone.trigger('ui:canvas:navigate', '.experiences');
        }
    });

    return Experiences;
});
