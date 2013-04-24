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
        print: {
            src: [
                'public/icomoo/style.css',
                'public/css/print.css'
            ],
            dest: 'public/css/print.css'
        },
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
                'src/config.js',
                'src/kernel.js'
            ],
            dest: 'public/javascript/build/<%= pkg.name %>.js'
        },
        release: {
            src: [
                'public/javascript/vendor/custom.modernizr.js',
                'public/javascript/vendor/almond.js',
                'public/javascript/build/<%= pkg.name %>.js'
            ],
            dest: 'public/javascript/build/<%= pkg.name %>.js'
        }
    },
    requirejs: {
        main: {
            options: {
                optimize: "none",
                baseUrl: "./public/javascript/",
                out: "public/javascript/build/<%= pkg.name %>.js",
                mainConfigFile: "src/config.js",
                name: "app/kernel",
                paths: {
                    "app": "../../src"
                }
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
        src: 'public/javascript/build/<%= pkg.name %>.js',
        dest: 'public/javascript/build/<%= pkg.name %>.js'
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
  grunt.registerTask('icomoo', ['concat:ie7', 'concat:css', 'concat:print', 'copy:font']);
  grunt.registerTask('dev', ['copy:pagedown', 'compass:dev', 'concat:dev', 'icomoo']);
  grunt.registerTask('release', [
    // copy and compile assets
    'copy:pagedown', 'compass:dist', 'icomoo',
    'requirejs',            // build from config file
    'concat:release',       // combine static libs with build
    'uglify'
  ]);

};
