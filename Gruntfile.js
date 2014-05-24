module.exports = function(grunt) {
  "use strict";     
  grunt.initConfig({
    less: {
      application: {
        options: {
          cleancss: true,
        },
        files: {
          'dist/styles/common.css': 'assets/styles/common.less',
        }
      },
      debug: {
        files: {
          'dist/styles/common-debug.css': 'assets/styles/common.less',
        }
      }
    },

    jade: {
        options: {
            client: true,
            debug: false,
            processName: function(filename) {
              return filename.slice("assets/templates/".length,-5);
            },
            namespace: 'jadetpl'
        },
        application: {
            files: {
                'dist/scripts/jadetpl.js': ['assets/templates/**/*.jade']
            }

        },
        debug: {
            files: {
                'dist/scripts/jadetpl-debug.js': ['assets/templates/**/*.jade']
            }
        }

    },
              
    transport :  {
      options: {
        paths: ['dist/scripts'],
        alias: {
          "jquery": "libs/jquery/jquery",
          "jade": "libs/jade/jade"
        }
      },
      application :  {
        files :  [{
          cwd: 'assets/scripts',
          src: '**/*.js',
          expand: true,
          dest :  '.build/scripts'    //将application.js、util.js合并且提取依赖，生成id，之后放在.build目录下
                              
        }]

                       
      }          
    },
    concat :  {               
      application :  {                    
        files :  {
          'dist/scripts/application.js': ['.build/**/*.js',
            '!.build/**/*-debug.js'
          ],                  
        }               
      },
      debug: {
        files: [{
          expand:true,
          cwd: '.build/',
          src: 'scripts/**/*-debug.js',
          dest: 'dist/'
        }]
      }          
    },
    uglify :  {               
      application :  {                    
        files :  {                       
          'dist/scripts/application.js' :  ['dist/scripts/application.js'],
          'dist/scripts/jadetpl.js' :  ['dist/scripts/jadetpl.js'],
        }               
      }          
    },
    clean :  {               
      application :  ['.build']  //清除.build文件
                
    },
    connect: {
      application: {
        options: {
          port: 4000
        }
      }
    },

    jshint: {
      application: {
        src: ['Gruntfile.js', 'assets/scripts/**/*.js'],
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      }

    },

    watch: {
      application: {
        files: ['Gruntfile.js', 'assets/scripts/**/*.js'],
        tasks: ['jshint']
      }
    },


        
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default', ['less','jade', 'transport', 'concat', 'uglify', 'jshint', 'clean', 'connect', 'watch'
  ]);
};
