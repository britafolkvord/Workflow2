module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files:{
                    'dist/css/style.css' : 'sass/style.scss'
                }
            }
        },
        cssmin:{
            minify: {
                src: 'dist/css/style.css',
                dest: 'dist/css/minified/style.min.css'
            }
        },
        watch: {
            css: {
                files: 'sass/style.scss',
                tasks: ['sass']
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{jpeg,jpg}'],
                    dest: 'dist/img'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src:[
                        'dist/css/minified/style.min.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: 'dist'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', [ 'browserSync', 'imagemin', 'watch']);
}