module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n;'
			},
			vendors: {
				src: [
					  'node_modules/jquery/dist/jquery.min.js',
					  'node_modules/jquery-ui/dist/jquery-ui.js',
					  'node_modules/jScrollPane/script/jquery.mousewheel.js',
					  'node_modules/jScrollPane/script/jquery.jscrollpane.min.js',
					  'node_modules/PageTransitions/js/modernizr.custom.js',
					  'node_modules/PageTransitions/js/jquery.dlmenu.js',
					  'js/resize.js',
					  'node_modules/PageTransitions/js/pagetransitions.js',
					  'node_modules/@vimeo/player/dist/player.min.js',

					  // Plugins
					  'node_modules/plugins/popup/js/jquery.popup.js',
					  'node_modules/plugins/youtube-captions/js/jquery.youtube-captions.js',
					  'node_modules/plugins/audio-captions/js/jquery.audio-captions.js',
					  'node_modules/plugins/drag-and-drop/js/jquery.drag-and-drop.js',
					  'node_modules/plugins/memory-game/js/jquery.memory-game.js',
					  'node_modules/plugins/quiz/js/jquery.quiz.js',
					  'node_modules/plugins/sort-letters-game/js/jquery.sortletters.js'
				
					 ],
				dest: 'js/vendors.min.js'
			}
		},
		uglify: {
			options: {

			},
			dist: {
				files: {
					'<%= concat.vendors.dest%>':['<%= concat.vendors.dest%>']
				}
			}
		},
		cssmin: {
			options: {
        		keepSpecialComments: 0
    		},
			target: {
				files: {
					'css/vendors.css': 	[
						// "css/fonts.css",
						"node_modules/bootstrap/dist/css/bootstrap.css",
						"node_modules/jquery-ui/dist/jquery-ui.css",
						"node_modules/jScrollPane/style/jquery.jscrollpane.css",
						"node_modules/animate.css/animate.min.css",
						"node_modules/PageTransitions/css/animations.css",
						"node_modules/PageTransitions/css/component.css",

						// Plugins
						"node_modules/plugins/popup/css/popup.css",
						"node_modules/plugins/youtube-captions/css/youtube-captions.css",
						"node_modules/plugins/audio-captions/css/audio-captions.css",
						"node_modules/plugins/drag-and-drop/css/drag-and-drop.css",
						"node_modules/plugins/memory-game/css/memory-game.css",
						"node_modules/plugins/quiz/css/quiz.css",
						"node_modules/plugins/sort-letters-game/css/sortletters.css"
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}