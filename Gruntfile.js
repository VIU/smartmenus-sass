module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({

   		// Metadata for smartmenus.js
   		// 
		// This project is based on the awesome work by Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT
		// https://github.com/vadikom/smartmenus
		// This banner on the min js file should remain intact.
		//
    	pkg: grunt.file.readJSON('smartmenus.jquery.json'),

    	banner_min: '/*! <%= pkg.title || pkg.name %> jQuery Plugin - v<%= pkg.version %> - <%= grunt.template.today("mmmm d, yyyy") %>\n\
 * <%= pkg.homepage %>\n\
 * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, Vadikom Web Ltd. <%= pkg.author.url %>; Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */',


		uglify: {
			my_target: {
				files: {
					'src/_/js/jquery.smartmenus.min.js' : [
															'src/jquery.smartmenus.js',
															'src/_/components/js/custom.js'
														]
				} // files
			}, // target
			options: {
				banner: '<%= banner_min %>'
			}  // options
		}, //uglify
		compass: {
				dev: {
					options: {
						bundleExec: true,
						config: 'config.rb'
					} // options
				}, // dev
		}, //compass
		watch: {
			options: {livereload: true },
			scripts: {
				files: ['src/_/components/js/*.js'],
				tasks: ['uglify']
			}, // scripts
			sass: {
				files:['src/_/components/sass/*.scss'],
				tasks:['compass:dev']
			}, // sass
			html: {
				files: ['test/*.html']
			} //html
		} //watch
	})  // initConfig
	// setup watch as the default task... just run  > grunt
	grunt.registerTask('default','watch');
} //exports