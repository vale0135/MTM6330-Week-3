// Define taks for gulp to run
const gulp = require('gulp')
const sass = require('gulp-sass')

// here is the function
gulp.task('sass',function() {
  return gulp
    .src('scss/**/*.scss') // tells it where to find the files to compile
    .pipe(sass()) // send those files to this compiler
    .pipe(gulp.dest('css')) // take the output and put it in the CSS folder
})
