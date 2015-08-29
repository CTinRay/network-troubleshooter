module.exports = function(grunt) {

    grunt.initConfig({
        manifest: {
          generate: {
            options: {
              basePath: ".",
              network: ["http://*", "https://*"],
              fallback: ["/ /offline.html"],
              exclude: ["js/jquery.min.js"],
              preferOnline: true,
              timestamp: true
            },
            src: [
                "images/**/*",
                "guides/*.html"
            ],
            dest: "manifest.appcache"
          }
        }
    });

    grunt.loadNpmTasks('grunt-manifest');

    grunt.registerTask('default', ['manifest']);

};
