<<<<<<< HEAD
/**
 * Created by msackeli on 5/21/2017.
 */
=======
>>>>>>> 9a3c1a75ec1aa30dd23bada8d26219d35d1239c6
// gruntfile.js

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
<<<<<<< HEAD
                    'src/css/main.css': 'less/main.less'
=======
                    'src/css/main.css': 'src/less/main.less'
>>>>>>> 9a3c1a75ec1aa30dd23bada8d26219d35d1239c6
                },
                options: {
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
                        new (require('less-plugin-clean-css'))()
                    ]
                }
            }
        },

        watch: {
            less: {
<<<<<<< HEAD
                files: ['less/**'],
=======
                files: ['src/less/**'],
>>>>>>> 9a3c1a75ec1aa30dd23bada8d26219d35d1239c6
                tasks: ['less']
            }
        }

    });

// 3. Where we tell Grunt we plan to use this plug-in.

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

// 4. Where we tell Grunt what to do when we type 'grunt' into the terminal.

    grunt.registerTask('default', ['less']);
    grunt.registerTask('compile-less', ['less']);

};