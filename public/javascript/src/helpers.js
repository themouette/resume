define([
    "vendor/handlebars",
    "vendor/underscore",
    "vendor/backbone",
    "app/data"
], function (Handlebars, _, Backbone, data) {
    "use strict";

    var skills = new Backbone.Collection(data.skills);
    var link = _.template('<a href="#!/skills/<%- id %>"><%- title %></a>');

    Handlebars.registerHelper('skill', function (skill) {
        if (skills.get(skill)) {
            var s = skills.get(skill);
            return new Handlebars.SafeString(link({id: s.get('id'), title: s.get('title')}));
        }

        return skill;
    });
});
