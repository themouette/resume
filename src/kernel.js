require([
    'vendor/jquery',
    'vendor/underscore',
    'vendor/backbone',
    'app/view/canvas',
    'app/experiences/router',
    'app/skills/router',
    'app/home/router',
    'app/print/router',
    'app/helpers'
], function ($, _, Backbone, Canvas, Experiences, Skills, Home, Print) {
    "use strict";

    // register module routes
    new Experiences();
    new Skills();
    new Home();
    new Print();
    var router = new Backbone.Router({ });
    Backbone.on('app:navigate', _.bind(router.navigate, router));

    // initialize canvas
    var canvas = new Canvas();

    $(function () {
        canvas.setElement($('body')).render();
        Backbone.history.start();
    });
});
