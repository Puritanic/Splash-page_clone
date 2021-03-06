var gulp 		 = require('gulp'),
	watch 		 = require('gulp-watch'),
	browserSync	 = require('browser-sync').create(); // implementing only create method from browser sync


gulp.task('watch', function(){

	browserSync.init({
		// notify: false,  // disables browser sync inject notification!
		server: {
			baseDir: 'app'
		}
	})

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){ // watching for changes in
		gulp.start('cssInject');						  // styles folder for all css files
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	})

});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/app.css')
		.pipe(browserSync.stream());
})

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
})