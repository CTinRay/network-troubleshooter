module.exports = function(grunt) {

    grunt.initConfig({
        preload_assets: {
            target: {
                options: {
                    template: 'preloadjs',
                },
                files: {
                    'js/manifest.js': ['images/*']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-preload-assets');

    grunt.registerTask('default', ['preload_assets']);

};
