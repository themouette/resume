define([
    'tpl!templates/header.html',
    'vendor/underscore',
    'vendor/backbone'
], function (tpl, _, Backbone) {

    var Header = Backbone.View.extend({

        render: function () {
            this.$el.html(tpl(this.getViewData()));
            return this;
        },
        getViewData: function () {
            return {};
        },

        navigate: function (selector) {
            this.$('.active').removeClass('active');
            this.$(selector).addClass('active');
        }
    });

    return Header;
});
