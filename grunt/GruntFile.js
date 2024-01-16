const grunt = require("grunt");

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        options: {
          paths: ["src/styles/main.less"],
          compress: true,
        },
        files: {
          "dist/styles/main.css": "src/styles/main.less",
        },
      },
    },

    uglify: {
      options: {
        mangle: true,
        compress: true,
      },
      my_target: {
        files: {
          "dist/js/scripts.min.js": "src/scripts/*.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};
