define([
    'vendor/underscore',
    'vendor/backbone',
    'app/router'
], function (_, Backbone, Router) {
    var Experiences = Router.extend({
        routes: {
            'experiences': "list",
            'experiences/:experience': "showOne"
        },

        list: function () {
            Backbone.trigger('ui:canvas:content', '<p>List experiences</p>');
            this.selectMenu();
        },

        showOne: function (id) {
            Backbone.trigger('ui:canvas:content', _.template('Navigate to experience <%- id %>', {id:id}));
            this.selectMenu();
        },

        selectMenu: function () {
            Backbone.trigger('ui:canvas:navigate', '.experiences');
        }
    });

    return Experiences;
});
