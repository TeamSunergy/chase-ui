const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('sass', function() {
  return gulp.src('./style/sass/style.scss')
  // Minify
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError)
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./style/css/'))

    // Normal compile with sourcemap
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', sass.logError)
    )
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./style/css/'));
});

// Watch task
gulp.task('default',function() {
  gulp.watch('./style/sass/**/*.scss',['sass']);
});