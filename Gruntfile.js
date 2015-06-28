//___________________________________________________________________________________
//                                                                              grunt
module.exports = function(grunt) {
	grunt.initConfig({
		//___________________________________________________________________________
		//                                                                     config
		pkg: grunt.file.readJSON('package.json'),
		//___________________________________________________________________________
		//                                                                  variables
		meta: {
			cssPath: 'ui/css/',
			sassPath: 'ui/sass/',
			jsPath: 'ui/js/',
			jsLibPath: 'ui/js/lib/',
			jsAppPath: 'ui/js/app/'
		},
		//___________________________________________________________________________
		//                                                                 javascript        
		uglify: {
			options: {
				mangle: false
			},
			libs: {
				src: [
					'<%= meta.jsLibPath %>jquery.min.js',
					'<%= meta.jsLibPath %>foundation/foundation.js',
					//'<%= meta.jsLibPath %>foundation/foundation.abide.js',
					//'<%= meta.jsLibPath %>foundation/foundation.interchange.js',
					//'<%= meta.jsLibPath %>foundation/foundation.reveal.js',
					//'<%= meta.jsLibPath %>foundation/foundation.accordion.js',
					//'<%= meta.jsLibPath %>foundation/foundation.joyride.js',
					//'<%= meta.jsLibPath %>foundation/foundation.slider.js',
					//'<%= meta.jsLibPath %>foundation/foundation.alert.js',
					//'<%= meta.jsLibPath %>foundation/foundation.tab.js',
					//'<%= meta.jsLibPath %>foundation/foundation.clearing.js',
					//'<%= meta.jsLibPath %>foundation/foundation.magellan.js',
					//'<%= meta.jsLibPath %>foundation/foundation.tooltip.js',
					//'<%= meta.jsLibPath %>foundation/foundation.dropdown.js',
					//'<%= meta.jsLibPath %>foundation/foundation.offcanvas.js',
					//'<%= meta.jsLibPath %>foundation/foundation.topbar.js',
					//'<%= meta.jsLibPath %>foundation/foundation.equalizer.js',
					//'<%= meta.jsLibPath %>foundation/foundation.orbit.js',
					//'<%= meta.jsLibPath %>highlight.js'
				],
				dest: '<%= meta.jsPath %>libs.min.js'
			}
		},
		//___________________________________________________________________________
		//                                                                   sass/css		
		sass: {
			foundation: {
				files: {
					'<%= meta.cssPath %>foundation.css': '<%= meta.sassPath %>app.scss'
				}
			},
			/*
            highlight: {
				files: {
					'<%= meta.cssPath %>highlight.css': '<%= meta.sassPath %>highlight/highlight.scss'
				}
			},
            */
		},
		//___________________________________________________________________________
		//                                                                 minify css
		cssmin: {
			compress: {
				files: {
					"<%= meta.cssPath %>app.css":
					[
						"<%= meta.cssPath %>foundation.css",
						//"<%= meta.cssPath %>highlight.css",
					]
				}
			}
		},
		//___________________________________________________________________________
		//                                                          remove temp files
		clean: {
			css: {
				src: [
						"<%= meta.cssPath %>foundation.css",
						//"<%= meta.cssPath %>highlight.css",
				]
			}
		},
		//___________________________________________________________________________
		//                                                                 auto-build
		watch: {
			js: {
				files: [
					'<%= meta.jsPath %>**/*.js',
					'<%= meta.jsPath %>**/**/*.js'
				],
				tasks: ['uglify'],
			},
			sass: {
				files: ['<%= meta.sassPath %>**/*.scss'],
				tasks: [
					'sass',
					'cssmin',
					'clean'
				],
			}
		}
	});
	//_______________________________________________________________________________
	//                                                                          tasks
	grunt.registerTask('css', [
		'sass',
		'cssmin',
		'clean'
	]);
	grunt.registerTask('js', [
		'uglify'
	]);
	grunt.registerTask('default', [
		'js',
		'css'
	]);
	grunt.event.on('watch', function(action, filepath) {
		grunt.log.writeln('changes detected!');
	});
	//_______________________________________________________________________________
	//                                                                   load modules
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
//___________________________________________________________________________________
//                                                                                eof    
