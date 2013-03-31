define([
    'vendor/jquery',
    'vendor/underscore',
    'vendor/backbone',
    'app/view/canvas',
    'app/experiences/router',
    'app/helpers'
], function ($, _, Backbone, Canvas, Experiences) {

    // register module routes
    new Experiences();
    var router = new Backbone.Router({
        routes: {
            '': function () {
                this.navigate('!/experiences', {replace: false, trigger: true});
            }
        }
    });
    Backbone.on('app:navigate', _.bind(router.navigate, router));

    // initialize canvas
    var canvas = new Canvas();

    $(function () {
        canvas.setElement($('body')).render();
        Backbone.history.start();
    });
});
