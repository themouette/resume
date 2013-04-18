define([
    'tpl!templates/footer.html',
    'vendor/underscore',
    'vendor/backbone'
], function (tpl, _, Backbone) {

    var Footer = Backbone.View.extend({
        render: function () {
            this.$el.html(tpl(this.getViewData()));
            return this;
        },
        getViewData: function () {
            return {};
        }
    });

    return Footer;
});
