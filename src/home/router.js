define([
    'vendor/underscore',
    'vendor/backbone',
    'app/router',
    'app/data',
    './view/show'
], function (_, Backbone, Router, data, ShowView) {

    var experiences = new Backbone.Collection(data.experiences);
    var views = {};

    var Home = Backbone.Router.extend({
        routes: {
            '': "home"
        },

        "home": function () {
            if (!views.show) {
                views.show = new ShowView({
                    model: new Backbone.Model({
                        experiences: experiences
                    })
                });
            }
            Backbone.trigger('ui:canvas:content', views.show.render().$el);
            Backbone.trigger('ui:canvas:navigate', 'h1');
        }
    });

    return Home;
});

