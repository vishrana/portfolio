const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const babel = require('gulp-babel');

gulp.task('pug', async () => gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .on('error', gutil.log)
    .pipe(gulp.dest('.')));

gulp.task('js', async () => gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel({presets: ['@babel/env']}))
    .on('error', gutil.log)
    .pipe(gulp.dest('assets/js')));

gulp.task('sass', async () => gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest('assets/css')));

gulp.task('assets', async () => gulp.src('src/assets/**/*').pipe(gulp.dest('assets')));

gulp.task('clean', async () => del.sync(['assets', 'index.html']));

gulp.task('default', gulp.series('clean', 'assets', gulp.parallel('pug', 'sass', 'js')));
