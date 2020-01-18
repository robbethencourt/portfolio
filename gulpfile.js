const fileinclude = require("gulp-file-include");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const minifyCSS = require("gulp-minify-css");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");
const uglify = require("gulp-uglify");
var rename = require("gulp-rename");

const server = browserSync.create();

const paths = {
  src: "./src/**/*",
  html: "./src/*.html",
  htmlDist: "./dist",
  css: "./src/css/**/*",
  cssDist: ".dist/css"
};

var cssVersion = 0.1;
var jsVersion = 0.1;

// html
function html() {
  return gulp
    .src([paths.html, "!src/header.html", "!src/footer.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest(paths.htmlDist));
}

// css
function css() {
  return gulp
    .src(["src/css/*.css"])
    .pipe(plumber())
    .pipe(minifyCSS())
    .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
    .pipe(concat("style." + cssVersion + ".min.css"))
    .pipe(gulp.dest("dist/css"));
}

// js
function js() {
  return gulp
    .src(["src/js/*.js"])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename("scripts." + jsVersion + ".min.js"))
    .pipe(gulp.dest("dist/js"));
}

// BrowserSync
function serve() {
  return server.init({
    server: {
      baseDir: "./dist"
    },
    port: 3001
  });
}

// BrowserSync Reload
function reload(done) {
  server.reload();
  done();
}

exports.default = function() {
  serve();
  gulp.watch(paths.src, gulp.series(html, css, js, reload));
};
