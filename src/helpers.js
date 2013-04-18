define([
    "vendor/handlebars",
    "vendor/underscore",
    "vendor/backbone",
    "vendor/moment",
    "vendor/markdown",
    "app/data"
], function (Handlebars, _, Backbone, moment, Mkd, data) {
    "use strict";

    var skills = new Backbone.Collection(data.skills);
    var linkTpl = _.template('<a href="#!/skills/<%- id %>"><%- title %></a>');
    Handlebars.registerHelper('skill', function (skill) {
        var s = skills.get(skill) || _.first(skills.where({id:skill}));
        if (s) {
            return new Handlebars.SafeString(
                linkTpl({id: s.get('id'), title: s.get('title')})
            );
        }

        return skill;
    });


    var companyTpl = _.template('<span class="company"><%- company %></span>');
    Handlebars.registerHelper('company', function (company) {
        return new Handlebars.SafeString(
            companyTpl({company: company})
        );
    });

    var contributionTpl = _.template('<span class="contribution"><%- title %></span>');
    var contributionLinkTpl = _.template('<a href="<%- url %>" class="contribution"><%- title %></a>');
    Handlebars.registerHelper('contribution', function (contribution) {
        if (typeof contribution === "string") {
            contribution = {title: contribution};
        }
        if (contribution.url) {
            return new Handlebars.SafeString(
                contributionLinkTpl(contribution)
            );
        }
        return new Handlebars.SafeString(
            contributionTpl(contribution)
        );
    });

    var periodTpl = _.template('<%- duration %>, from <%- from %> to <%- to %>');
    var periodStillTpl = _.template('started <%- ago %>');
    Handlebars.registerHelper('time_period', function (from, to) {
        if (to) {
            return new Handlebars.SafeString(periodTpl({
                from: moment(from).format('LL'),
                to: moment(to).format('LL'),
                duration: moment(to).from(from, /*skip prefix*/ true)
            }));
        }

        return new Handlebars.SafeString(periodStillTpl({
            ago: moment(from).fromNow()
        }));
    });

    Handlebars.registerHelper('markdown', function (source) {
        var md = new Mkd();
        return new Handlebars.SafeString(
            md.makeHtml(source || '')
        );
    });
});
