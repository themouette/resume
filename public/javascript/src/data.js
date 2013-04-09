define({
    experiences: [{
        id: "almerys",
        title: "Web developer",
        company: "Almerys",
        from: "2013-04-02",
        until: null,
        mission: "Develop a shared events and calendars system",
        description: "TODO",
        skills: ["javascript", "backbone"]
    }, {
        id: "universite-d-auvergne",
        title: "PHP teacher",
        company: "Université d'Auvergne",
        from: "2013-01-15",
        until: "2013-02-15",
        mission: "20 teaching hours to licence students",
        description: "TODO",
        skills: ["php", "phpunit"]
    }, {
        id: "itnetwork",
        title: "Web developer",
        company: "Inter Trade Network",
        from: "2012-10-01",
        until: "2013-03-31",
        mission: "Develop a car retailer intranet",
        description: "TODO",
        skills: ["php", "symfony2", "doctrine", "phpunit", "mysql", "elasticsearch", "javascript", "backbone", "requirejs", "casperjs", "git"]
    }, {
        id: "carpe-hora",
        title: "Head and co-founder",
        company: "Carpe Hora",
        from: "2005-11-01",
        until: "2012-09-30",
        mission: "Develop an online booking system.",
        description: "TODO",
        skills: ["php", "symfony1", "propel", "postgresql", "javascript", "jquery", "backbone", "git", "puppet"]
    }, {
        id: "orange-r-d",
        title: "Gadget/Widget developer",
        company: "Orange R&D",
        from: "2008-06-15",
        until: "2007-10-01",
        mission: "Develop portlets and factorize developments",
        description: "TODO",
        skills: ["javascript", "Windows Sidebar", "Apple Dashboard", "iGoogle", "Netvibes", "eclipse", "ant"]
    }, {
        id: "efixo",
        title: "Lead developer",
        company: "Efixo",
        from: "2007-09-30",
        until: "2007-04-01",
        mission: "Set up a dynamic UI for ",
        description: "TODO",
        skills: ["javascript", "Prototype", "Scriptaculous", "xslt", "C", "Linux (embedded system)"]
    }, {
        id: "asco-joucomatic",
        title: "Internship",
        company: "Asco Joucomatic",
        from: "2004-06-01",
        until: "2004-08-31",
        mission: "Abroad internship",
        description: "TODO",
        skills: []
    }, {
        id: "msd",
        title: "A&IT Aprentice",
        company: "MSD",
        from: "2002-11-15",
        until: "2005-11-15",
        mission: "Integration in A&IT department",
        description: "TODO",
        skills: ["documentation", "Automatons", "VBA"]
    }],
    skills: [{
        id: "php",
        title: "PHP",
        url: "http://php.net",
        description: "I use php since 2005 with or without framework.",
        related: ["symfony2", "phpunit", "propel", "symfony1", "doctrine", "casperjs"],
        contributions: ["propel"]
    }, {
        id: "symfony1",
        title: "symfony 1.0 to 1.4",
        url: "http://symfony.com",
        related: ["phpunit", "propel", "symfony2", "php"],
        contributions: ["chCmsExposeRoutingPlugin", "chCmsApiPlugin", "symfony"]
    },
    {
        id: "symfony2",
        title: "Symfony2",
        url: "http://symfony.com",
        related: ["phpunit", "propel", "doctrine", "elasticsearch", "casperjs", "php"],
        contributions: ["FOSElasticaBundle"]
    }, {
        id: "phpunit",
        title: "PhpUnit",
        url: "http://phpunit.de",
        related: ["phpunit", "propel", "doctrine", "elasticsearch", "casperjs", "php"]
    }, {
        id: "javascript",
        title: "JavaScript",
        description: "In love with JavaScript since 2006.\nI first started with no framework, then Prototype came in, quickly replaced by jQuery, for wich I developped and customized some plugins.\nDuring 2008 I had my first template engine tries. Lately BACKBONEJS caught my attention.",
        related: ["backbone", "jquery", "prototype", "handlebars", "requirejs", "casperjs"]
    }, {
        id: "backbone",
        title: "BACKBONE.JS",
        url: "http://backbonejs.org",
        related: ["javascript", "underscore/lodash", "handlebars", "requirejs"]
    }, {
        id: "requirejs",
        title: "REQUIREJS",
        url: "http://requirejs.org",
        related: ["javascript", "backbone", "handlebars"]
    }, {
        id: "casperjs",
        title: "CasperJS",
        url: "http://casperjs.org",
        related: ["javascript", "functional testing", "symfony2", "backbone"]
    }, {
        id: "git",
        title: "GIT",
        url: "http://git-scm.org"
    }, {
        id: "vagrant",
        title: "Vagrant",
        url: "http://vagrantup.com"
    }],
    educations: [{
        id: "esigelec",
        title: "Master degree in Engeniering",
        school: "ESIGELEC",
        from: "2003-09-01",
        until: "2005-11-15"
    }, {
        id: "blaise-pascal",
        title: "Classe préparatoire aux grandes écoles (Maths-Physics)",
        school: "Lycée Blais Pascal",
        from: "2002-09-01",
        until: "2003-06-01"
    }]
});
