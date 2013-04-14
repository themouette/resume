// Gruntfile.js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
        pagedown: {
            src: [
                '**'
            ],
            dest: 'public/javascript/vendor/pagedown/',
            expand: true,
            cwd: 'node_modules/pagedown/'
        },
        font: {
            src: [
                '**'
            ],
            dest: 'public/css/fonts/',
            expand: true,
            cwd: 'public/icomoo/fonts/'
        }
    },
    concat: {
        options: {
            separator: ';',
            stripBanners: true,
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        // In dev phase load module asynchronously.
        // only concat require and config file.
        css: {
            src: [
                'public/icomoo/style.css',
                'public/css/app.css'
            ],
            dest: 'public/css/app.css'
        },
        ie7: {
            src: [
                'public/icomoo/lte-ie7.js'
            ],
            dest: 'public/javascript/build/lte-ie7.js'
        },
        dev: {
            src: [
                'public/javascript/vendor/custom.modernizr.js',
                'public/javascript/vendor/require.js',
                'public/javascript/config.js'
            ],
            dest: 'public/javascript/build/<%= pkg.name %>.js'
        },
        release: {
            src: [
                'public/javascript/vendor/custom.modernizr.js',
                'public/javascript/vendor/almond.js',
                'public/javascript/config.js'
            ],
            dest: 'public/javascript/build/<%= pkg.name %>.js'
        }
    },
    requirejs: {
        main: {
            options: {
                baseUrl: "/",
                mainConfigFile: "public/javascript/src/config.js",
                out: "build/<%= pkg.name %>.js"
            }
        }
    },
    compass: {
        dist: {                   // Target
            options: {              // Target options
                sassDir: 'sass',
                cssDir: 'public/css',
                environment: 'production'
            }
        },
        dev: {                    // Another target
            options: {
                sassDir: 'sass',
                cssDir: 'public/css'
            }
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/build/<%= pkg.name %>.js',
        dest: 'public/build/<%= pkg.name %>.js'
      }
    },

    watch: {
        'script-dev': {
            files: ['public/javascript/*.js'],
            tasks: ['concat:dev']
        },
        'compass-dev': {
            files: ['sass/**/*.scss'],
            tasks: ['compass:dev', 'icomoo']
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('icomoo', ['concat:ie7', 'concat:css', 'copy:font']);
  grunt.registerTask('dev', ['copy:pagedown', 'compass', 'concat:dev', 'icomoo']);
  grunt.registerTask('release', ['copy:pagedown', 'compass', 'require', 'concat:release', 'icomoo', 'uglify']);

};
