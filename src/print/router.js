define([
    'vendor/underscore',
    'vendor/backbone',
    'app/router',
    'app/data',
    './view/print'
], function (_, Backbone, Router, data, ShowView) {

    var experiences = new Backbone.Collection(data.experiences);
    var skillGroups = new Backbone.Collection(data.skillGroups);
    var views = {};

    var Print = Router.extend({
        routes: {
            'print': "print"
        },

        "print": function () {
            if (!views.show) {
                views.show = new ShowView({
                    model: new Backbone.Model({
                        experiences: experiences,
                        skillGroups: skillGroups
                    })
                });
            }
            Backbone.trigger('ui:canvas:content', views.show.render().$el);
            Backbone.trigger('ui:canvas:navigate', 'h1');
            window.print();
        }
    });

    return Print;
});

