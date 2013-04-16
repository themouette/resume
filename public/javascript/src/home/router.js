define([
    'vendor/underscore',
    'vendor/backbone',
    'app/router',
    'app/data',
    './view/show'
], function (_, Backbone, Router, data, ShowView) {

    var views = {};

    var Home = Backbone.Router.extend({
        routes: {
            '': "home"
        },

        "home": function () {
        console.log('home');
            if (!views.show) {
                views.show = new ShowView({
                    model: new Backbone.Model()
                });
            }
            Backbone.trigger('ui:canvas:content', views.show.render().$el);
        }
    });

    return Home;
});

