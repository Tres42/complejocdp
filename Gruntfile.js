// Generated on 2014-02-24 using generator-bedrock 0.1.0
// [SublimeLinter jshint-curly:false]
'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var yeomanConfig = {
        app: 'app',
        dist: 'dist',
        tmp: '.tmp'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            sass: {
                files: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/styles/{,*/}{,*/}*.{scss,sass}'
                ],
                tasks: ['sass:server']
            },
            server: {
                options: {
                    livereload: true,
                },
                files: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/*.html',
                    '{<%= yeoman.tmp %>,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{<%= yeoman.tmp %>,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: true
            },
            server: {
                options: {
                    base: ['.','<%= yeoman.tmp %>', '<%= yeoman.app %>'],
                    debug: true
                }
            },
            dist: {
                options: {
                    base: '<%= yeoman.dist %>',
                    keepalive: true,
                    livereload: false
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.tmp %>',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '<%= yeoman.tmp %>'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        sass: {
            options: {
                includePaths: [
                    '<%= yeoman.app %>/styles/',
                    '<%= yeoman.app %>/bower_components/',
                    '<%= yeoman.app %>/bower_components/foundation/scss',
                    '<%= yeoman.app %>/bower_components/font-awesome/scss',
                    '<%= yeoman.app %>/bower_components/bourbon/app/assets/stylesheets'
                ],
            },
            dist: {
                files: {
                    '<%= yeoman.tmp %>/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
                }
            },
            server: {
                options: {
                    sourceComments: 'map',
                    sourceMap: '<%= yeoman.tmp %>/styles/main.css.map'
                },
                files: {
                    '<%= yeoman.tmp %>/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
                }
            }
        },
        responsive_images: {
            options: {
                sizes: [{
                    name: 'small',
                    width: 320
                },{
                    name: 'medium',
                    width: 640
                }, {
                    name: 'large',
                    width: 1440
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images/slides',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.tmp %>/images/slides'
                }]
            }
        },
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },
        modernizr: {
            'devFile': '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
            'outputFile': '<%= yeoman.dist %>/scripts/modernizr.js',
            'extra': {
                'shiv': true,
                'printshiv': false,
                'load': true,
                'mq': false,
                'cssclasses': true
            },
            'extensibility': {
                'addtest': false,
                'prefixed': false,
                'teststyles': false,
                'testprops': false,
                'testallprops': false,
                'hasevents': false,
                'prefixes': false,
                'domprefixes': false
            },
            'uglify': true,
            'tests': [],
            'parseFiles': true,
            // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
            // You can override this by defining a 'files' array below.
            // 'files' : [],
            'matchCommunityTests': false,
            'customTests': []
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: [
                    '<%= yeoman.dist %>',
                    '<%= yeoman.dist %>/styles'
                ]
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            options: {
                cache: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                },{
                    expand: true,
                    cwd: '<%= yeoman.tmp %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            },
            slides: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.tmp %>/images/slides',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images/slides'
                }]
            }
        },
        htmlmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        uncss: {
            dist: {
                options: {
                    stylesheets: ['../<%= yeoman.tmp %>/concat/styles/main.min.css'],
                    ignore: ['.preloader', /.*\.js-generated.*/,
                             /\.fixed ?.*/, /.*\.top-bar.*\.expanded.*/,
                             /.*dropdown.*/, /.*\.mini.*/,
                             /.*orbit.*/]
                },
                src: ['<%= yeoman.app %>/index.html'],
                dest: '<%= yeoman.tmp %>/concat/styles/main.min.css'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                report: 'min'
            }
        },
        uglify: {
            options: {
                report: 'min',
                preserverComments: 'some'
            }
        },
        copy: {
            server: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['<%= yeoman.app %>/bower_components/font-awesome/fonts/**'],
                    dest: '<%= yeoman.tmp %>/styles/fonts/',
                    filter: 'isFile'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,svg}',
                        'styles/fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '<%= yeoman.tmp %>/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    flatten: true,
                    src: ['<%= yeoman.app %>/bower_components/font-awesome/fonts/**'],
                    dest: '<%= yeoman.dist %>/styles/fonts/',
                    filter: 'isFile'
                }]
            }
        },
        concurrent: {
            dist: [
                'sass:dist',
                'imagemin:dist',
                'htmlmin'
            ]
        },
        'gh-pages': {
            options: {
                // branch: 'master', // Publish to another branch
                // repo: 'ssh://git@example.com/other/repo.git', // Publish to another repository
                base: 'dist',
                clone: '<%= yeoman.tmp %>/gh-pages/repo'
            },
            src: '**'
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'test',
        'dist'
    ]);

    grunt.registerTask('dist', [
        'clean:dist',
        'responsive_images',
        'useminPrepare',
        'concurrent:dist',
        'concat',
        'uncss',
        'cssmin',
        'uglify',
        'copy:dist',
        'filerev',
        'usemin',
        'imagemin:slides'
    ]);

    grunt.registerTask('publish', function () {
        grunt.task.run('dist');

        try {
            grunt.task.run('gh-pages');
        } catch (err) {
            grunt.fail.warn('You need to install `grunt-gh-pages` to publish to github. Try `npm install --save-dev grunt-gh-pages`.');
        }
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['dist', 'open', 'connect:dist']);
        }

        grunt.task.run([
            'clean:server',
            'sass:server',
            'responsive_images',
            'copy:server',
            'connect:server',
            'open:server',
            'watch'
        ]);
    });
};
