var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var hash = require("gulp-hash");
var del = require("del");
var exec = require("child_process").exec;
var runSequence = require('run-sequence');

// Compile SCSS files to CSS
gulp.task("scss", function () {

  //Delete our old css files
  del(["static/css/**/*"])

  //compile hashed css files
  gulp.src("src/scss/main.scss")
    .pipe(sass({
      outputStyle: "compressed"
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 10 versions"]
    }))
    .pipe(hash())
    .pipe(gulp.dest("static/css"))
    .pipe(hash.manifest("hash.json"))
    .pipe(gulp.dest("data/css"));

    console.log('CSS generated.');

});

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
  gulp.watch("src/scss/**/*", ["scss"])
});


// Generate the site with Hugo
gulp.task("generate", function () {
  // del(["public"]);
  console.log('Public directry cleaned.');
  console.log('Commencing Hugo buoid...');
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout); // See Hugo output
  });
});



// Run a complete build
gulp.task("build", function (cb) {
  runSequence(
    'scss',
    'generate',
    cb
  );
});


// Set watch as default task
gulp.task("default", ["watch"]);
