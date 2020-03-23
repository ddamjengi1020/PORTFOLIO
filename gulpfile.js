const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const del = require("del");
const ghPages = require("gulp-gh-pages");

sass.compiler = require("node-sass");

const paths = {
  video: {
    src: "src/videos/*",
    dest: "bundle/videos"
  },
  img: {
    src: "src/images/**/*",
    dest: "bundle/images"
  },
  scss: {
    src: "src/assets/scss/**/*.scss",
    dest: "bundle"
  },
  js: {
    src: "src/assets/js/*.js",
    dest: "bundle"
  },
  pug: {
    src: "src/views/**/*.pug",
    dest: "bundle"
  },
  font: {
    src: "src/font/*",
    dest: "bundle/font"
  }
};

function clean() {
  return del(["bundle"]);
}

function publishClean() {
  return del([".publish"]);
}

function js() {
  return gulp
    .src(paths.js.src)
    .pipe(concat("main.js"))
    .pipe(gulp.dest(paths.js.dest));
}

function video() {
  return gulp.src(paths.video.src).pipe(gulp.dest(paths.video.dest));
}

function font() {
  return gulp.src(paths.font.src).pipe(gulp.dest(paths.font.dest));
}

function image() {
  return gulp
    .src(paths.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img.dest));
}

function styles() {
  return gulp
    .src(paths.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ["last 2 versions"]
      })
    )
    .pipe(concat("styles.css"))
    .pipe(csso())
    .pipe(gulp.dest(paths.scss.dest));
}

function template() {
  return gulp
    .src(paths.pug.src)
    .pipe(pug())
    .pipe(gulp.dest(paths.pug.dest));
}

function _deploy() {
  return gulp.src("bundle/**/*").pipe(ghPages());
}

const img = gulp.series([video, image]);

const dev = gulp.series([clean, styles, template, js, font]);

const deploy = gulp.series([publishClean, _deploy]);

module.exports.img = img;

module.exports.dev = dev;

module.exports.deploy = deploy;
