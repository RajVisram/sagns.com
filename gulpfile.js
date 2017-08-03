var gulp         = require("gulp");
var sass         = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var hash         = require("gulp-hash");
var del          = require("del");


// Compile SCSS files to CSS
gulp.task("scss", function () {

  //Delete our old css files
  del(["static/css/**/*"])

  //compile hashed css files
  gulp.src("src/scss/main.scss")
    .pipe(sass({
      outputStyle : "compressed"
    }))
    .pipe(autoprefixer({
      browsers : ["last 20 versions"]
    }))
    .pipe(hash())
    .pipe(gulp.dest("static/css"))
    .pipe(hash.manifest("hash.json"))
    .pipe(gulp.dest("data/css"))
});

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
  gulp.watch("src/scss/**/*", ["scss"])
});


// Set watch as default task
gulp.task("default", ["watch"]);
