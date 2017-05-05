'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

const config = {
  name: 'app.js',
  path: {
    src: 'src/log-suppressor.js, src/app.js',
    dist: 'dist/'
  }
};

/**
 * JavaScript
 */

gulp.task('js', function() {
    return gulp.src(config.path.src, {base: './'})
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify({}))
      .pipe(concat(config.name))
      .pipe(rename({suffix: '.min'}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.path.dist));
});

/**
 * Tasks
 */

gulp.task('default', ['js']);
