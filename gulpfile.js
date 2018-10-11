let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let browserSync = require('browser-sync').create();
let uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
});

gulp.task('minify-css', () => {
	return gulp.src('css/main.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('uglify', () => {
	return gulp.src('build/js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('reloadHTML', () => {
	return gulp.src('*.html')
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('bablify', () => {
	gulp.src('js/main.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['browserSync'], () => {
	gulp.watch('css/main.css', ['minify-css']);
	gulp.watch('js/main.js', ['bablify']);
	gulp.watch('*.html', ['reloadHTML']);
});
