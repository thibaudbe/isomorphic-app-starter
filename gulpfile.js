var es = require('event-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglifyjs');
var browserify = require('gulp-browserify');

gulp.task('scripts', function () {
	return es.concat(gulp.src([
		'app/app.js'
	]))
		.pipe(concat('bundle.js'))
		.pipe(browserify({
			debug: true,
			transform: ['reactify']
		}))
		.pipe(uglifyjs())
		.pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['scripts']);
