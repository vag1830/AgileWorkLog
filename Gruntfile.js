module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // watch: {
        //     styles: {
        //         files: ['common/styles/{,*/}*.less'],
        //         tasks: ['less:development']
        //     }
        // },

        // concat: {
        //     dist: {
        //         src: [
        //             'js/libs/*.js',
        //             'js/global.js'
        //         ],
        //         dest: 'js/build/production.js'
        //     }
        // },

        // less: {
        //     development: {
        //         options: {
        //             paths: ["common/styles/*.less"]
        //         },
        //         files: {
        //             "common/css/main.css": "common/styles/all.less"
        //         }
        //     }
        // }
    });

    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.registerTask('default',
    //     [
    //         "watch"
    //     ]
    // );
};