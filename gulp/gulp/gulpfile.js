const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImagens() {
  return gulp
    .src("./src/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/img"));
}

function comprimeJs() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"));
}

function compilaSass() {
  return gulp
    .src("./src/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

exports.default = () => {
  gulp.watch(
    "./src/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(comprimeJs)
  );
  gulp.watch(
    "./src/assets/images/*",
    { ignoreInitial: false },
    gulp.series(comprimeImagens)
  );
  gulp.watch(
    "./src/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
};
