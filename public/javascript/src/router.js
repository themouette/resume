define([
    'vendor/underscore',
    'vendor/backbone'
], function (_, Backbone, Experiences) {
    var Router = Backbone.Router.extend({
        prefix: '!/',
        route: function (route, name, callback) {
            route = this.prefix + route;
            Backbone.Router.prototype.route.call(this, route, name, callback);
        }
    });

    return Router;
});
