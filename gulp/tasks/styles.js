
var gulp 		 = require('gulp'),	
	postcss 	 = require('gulp-postcss'),
	precss 		 = require('precss'),
	hexrgba		 = require('postcss-hexrgba'),
	autoprefixer = require('autoprefixer'),
	animation 	 = require('postcss-animation');


gulp.task('styles', function(){
	// we return this task because gulp.src is async function
	return gulp.src('./app/assets/styles/app.css')
		.pipe(postcss([
			precss(),
			animation(),
			    hexrgba,
			     autoprefixer()]))
		.on('error', function(err){
			if (err) {
				console.log(err.toString());
			}
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));

	
});