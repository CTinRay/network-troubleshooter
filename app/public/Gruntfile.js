module.exports = function(grunt) {

    grunt.initConfig({
        manifest: {
          generate: {
            options: {
              basePath: ".",
              network: ["http://*", "https://*"],
             /* cache: ['http://fonts.googleapis.com/icon?family=Material+Icons'],*/
              fallback: ["/ /offline.html"],
              exclude: ["js/jquery.min.js"],
              preferOnline: true,
              timestamp: true
            },
            src: [
                "images/**/*",
                "guides/*.html",
                "partials/*.html",
                "js/build.js",
                "data/**/*.json",
                "css/build.css",
                "css/fonts/*"
            ],
            dest: "manifest.appcache"
          }
        },
      concat: {
        js: {
            src: [
                  /* Angular.js */
                  'bower_components/angular/angular.min.js',
                  'bower_components/angular-route/angular-route.min.js',
                  'bower_components/angular-sanitize/angular-sanitize.min.js',
                  'bower_components/angular-animate/angular-animate.min.js',
                  
                  /* Custom js files */
                  'js/actions.js',
                  'js/general.js', 
                  'js/troubleshooterController.js',
                  
                  /* Google MDL */
                  'bower_components/material-design-lite/material.min.js'
                  ],

            dest: 'js/build.js',
        },
        css: {
            src: [
                  'bower_components/material-design-lite/material.min.css',
                  'css/font.css',
                  'css/general.css'
                  ],

            dest: 'css/build.css',
        }
      }
    });

    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['manifest','concat']);

};
