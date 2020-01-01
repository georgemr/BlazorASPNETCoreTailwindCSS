module.exports = function (grunt) {

    grunt.initConfig({

        // get the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),

        // create a clean task to remove production resource files under wwwroot
        clean: ["wwwroot/css/*"],

        // PostCSS - Tailwindcss and Autoprefixer
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('tailwindcss')(),
                    require('autoprefixer') // add vendor prefixes
                ]
            },
            dist: {
                expand: true,
                cwd: 'src/css/',
                src: ['*.css'],
                dest: 'wwwroot/css/',
                ext: '.css'
            }
        }

    });

    // Load Grunt Plugins
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-postcss");

};






//module.exports = function (grunt) {
//    grunt.initConfig({
//        // get the configuration info from package.json
//        pkg: grunt.file.readJSON('package.json'),

//        // PostCSS - Tailwindcss and Autoprefixer
//        postcss: {
//            options: {
//                map: true, // inline sourcemaps
//                processors: [
//                    require('tailwindcss')(),
//                    require('autoprefixer')({ browsers: 'last 2 versions' }) // add vendor prefixes
//                ]
//            },
//            dist: {
//                expand: true,
//                cwd: 'ui/src/tailwindcss/',
//                src: ['**/*.css'],
//                dest: 'ui/dist/tailwindcss/',
//                ext: '.css'
//            }
//        },

        //concat: {
        //    all: {
        //        src: ['src/css/*.css', 'src/css/tailwind/dist/*.css'],
        //        dest: 'src/temp/app.css'
        //    }
        //},

        //uglify: {
        //    all: {
        //        src: ['src/temp/app.css'],
        //        dest: 'wwwroot/css/app.min.css'
        //    }
        //}

//        // Watch for changes and run Tasks
//        watch: {
//            postcss: {
//                files: 'ui/src/tailwindcss/**/*.css',
//                tasks: ['compile-tailwindcss'],
//                options: {
//                    interrupt: true
//                }
//            }
//        }
//    })

//    // Load Grunt Plugins
//    grunt.loadNpmTasks('grunt-contrib-watch')
//    grunt.loadNpmTasks('grunt-postcss')
//    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.loadNpmTasks('grunt-contrib-uglify');

//    // Register Tasks
//    grunt.registerTask('compile-tailwindcss', ['postcss'])

//    // Resgiter Watcher Tasks
//    grunt.registerTask('watch-tailwindcss', ['watch:postcss'])
//}