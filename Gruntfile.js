module.exports = function(grunt) {

    /**
      Load all installed Grunt plugins, installed with "npm install" on command line.
    */
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');

    /**
      Defining Grunt config object.
    */
    var taskConfig = {

      /** 
        Path for the build, app and vendor files directory to be used in grunt tasks.
      */
      build_dir: 'build',

      /**
        Reading package.json file.
      */
      pkg: grunt.file.readJSON("package.json"),

      /**
        Grunt clean task to delete the build dir.
      */
      clean: [ '<%= build_dir %>' ],

      /**
        Grunt copy task to copy the assets in to build directory.
      */
      copy: {
        build_app : {
          files: [
            {
              src: [ '**' ],
              dest: '<%= build_dir %>/',
              cwd: 'src/',
              expand: true
            }
          ]
        },
        build_vendor : {
          files: [
            {
              src: [ 'vendor/**' ],
              dest: '<%= build_dir %>/',
              cwd: '.',
              expand: true
            }
          ]
        }
      },

      /**
        Grunt less task to compile less files in to css files.
      */
      less: {
          build: {
              files: {
                  '<%= build_dir %>/assets/<%= pkg.name %>.css': '<%= build_dir %>/less/app.less'
              }
          }
      }
    };

    /**
      Initializing configuration object.
    */
    grunt.initConfig(taskConfig);

    /**
      Registering build grunt task, this would be run by typing "grunt build" on the command line.
    */
    grunt.registerTask('build', ['clean', 'copy:build_app', 'copy:build_vendor', 'less:build']);
};