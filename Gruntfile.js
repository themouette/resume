// Gruntfile.js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: {
            separator: ';',
            stripBanners: true,
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        // In dev phase load module asynchronously.
        // only concat require and config file.
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
            tasks: ['compass:dev']
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('dev', ['compass', 'concat:dev']);
  grunt.registerTask('release', ['compass', 'require', 'concat:release', 'uglify']);

};
