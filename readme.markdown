My resume
=========

Built using [requirejs](http://requirejs.org/) config and
[Gruntfile](http://gruntjs.com/) to use with [zurb
foundation](http://foundation.zurb.com/),
[Backbonejs](http://documentcloud.github.com/backbone/) and
[lodash](http://lodash.com/) as [underscorejs](http://underscorejs.org/)
replacement.

Application events
------------------

* `ui:canvas:navigate`: select menu item. Following arguments are expected:
    * `$el`: the element to insert
    * `empty`: if `false` then the canvas won't be empty.
* `ui:canvas:content`: replace main content. Following arguments are expected:
    * `selector`: the selector of items to select.

* `app:navigate`: navigate for a url to another. Folowing arguments are
  expected:
    * `url`: the url hash to navigate to.
    * `options`: same as `Backbone.Router.navigate`.
