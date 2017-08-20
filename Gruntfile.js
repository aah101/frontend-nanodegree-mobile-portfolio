and this works - forgot to put grunt-contrib-imagemin

module.exports = function(grunt) {

  grunt.initConfig({
    
    imagemin: {
      dev: {
        options: {
            width: 30,
            suffix: 'small',
        },
        files: [{
          expand: true,
          src: 'profilepic.jpg',
          cwd: 'img/',
          dest: 'dist/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');;
  grunt.registerTask('default', ['imagemin']);

};



// this works 

// module.exports = function(grunt) {

//   grunt.initConfig({
    
//     responsive_images: {
//       dev: {
//         options: {
//             width: 30,
//             suffix: 'small',
//         },
//         files: [{
//           expand: true,
//           src: 'profilepic.jpg',
//           cwd: 'img/',
//           dest: 'dist/'
//         }]
//       }
//     },
//   });

//   grunt.loadNpmTasks('grunt-responsive-images');
//   grunt.registerTask('default', ['responsive_images']);

// };





//this didn't work 

// module.exports = function(grunt) {
// 'use strict';

// grunt.initConfig({
// image_resize:  {
//   dev: {
//     options: {
//       width: 500,
//       overwrite: false
//     },
//    files: [{
//    src: ['views/images/pizzeria.jpg'],
//    cwd: 'frontend-nanodegree-mobile-portfolio/views/images/',
//    dest: 'views/images/'
//     }]
//     }
//   }
// })


// //grunt.loadNpmTasks('grunt-responsive-images');
// grunt.loadNpmTasks('grunt-image-resize');
// grunt.registerTask('default', ['image_resize']);

// };







   //'img/**/*.{gif, jpg, png}'],
   


//   responsive_images: {