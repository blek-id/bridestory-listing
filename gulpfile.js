const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const csso = require('gulp-csso');
const webpack = require('webpack-stream');
const compiler = require('webpack');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');


gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe((gulp.dest('src/css')))
})

gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(webpack({
      module: {
        rules: [
          { test: /\.(js)$/, loader: 'babel-loader' }
        ]
      },
      output: {
        filename: 'main.js',
      },
      mode: 'development', // Change mode to production for build
    }, compiler))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('src/transpiled')); // Change to 'dist/transpiled' for build
})

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
})

gulp.task('reload', function (done) {
  browserSync.reload();
  done();
})

gulp.task('asset-opt', function () {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', csso()))
    .pipe(gulp.dest('dist'))
})

gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
})

gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/images'));
})

gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
})

gulp.task('api', function () {
  return gulp.src('src/api/**/*')
    .pipe(gulp.dest('dist/api'));
})

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass', 'reload'));
  gulp.watch('src/*.html', gulp.series('reload'));
  gulp.watch('src/js/**/*.js', gulp.series('scripts', 'reload'));
})

gulp.task('live-server', gulp.parallel('serve', 'watch'));
gulp.task('build', gulp.series('fonts', 'images', 'api', 'sass', 'scripts', 'asset-opt'))