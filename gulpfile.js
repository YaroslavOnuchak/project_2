let gulp = require("gulp"),
  { src, dest } = require("gulp"),
  file_include = require("gulp-file-include"),
  project_folder = "dist",
  source_folder = "app",
  sass = require("gulp-sass"),
  browser_Sync = require("browser-sync").create(),
  uglify = require("gulp-uglify-es").default,
  concat = require("gulp-concat"),
  rename = require("gulp-rename"),
  group_media = require("gulp-group-css-media-queries"),
  imagemin = require("gulp-imagemin"),
  webp = require("gulp-webp"),
  webp_html = require("gulp-webp-html"),
  webpcss = require("gulp-webpcss"),
  del = require("del");

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: [source_folder + "/*.html", `!${source_folder}/_*.html`],
    css: [source_folder + "/scss/*.scss", `!${source_folder}/_*.scss`],
    js: source_folder + "/js/main.js",
    img: source_folder + "/img/*.*",
    fonts: source_folder + "/fonts/*.*",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.*",
  },
  clean: `./${project_folder}/`,
};

function browserSync(params) {
  browser_Sync.init({
    server: {
      baseDir: `./${project_folder}/`,
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(file_include())
    .pipe(webp_html())
    .pipe(dest(path.build.html))
    .pipe(browser_Sync.stream());
}
function jsLibrery() {
  return gulp
    .src([
      'node_modules/jquery/dist/jquery.min.js',
      "node_modules/slick-carousel/slick/slick.js",
      // "node_modules/magnific-popup/dist/jquery.magnific-popup.js",
    ])
    .pipe(concat("_libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js/"))
    .pipe(browser_Sync.stream());
}
function js() {
  return (
    src(path.src.js)
      .pipe(file_include())
      // .pipe(concat("main.js"))
      .pipe(dest(path.build.js))
      .pipe(uglify())
      .pipe(rename({ suffix: ".min" }))
      .pipe(dest(path.build.js))
      .pipe(browser_Sync.stream())
  );
}
function cssLibs() {
  return src([
    "node_modules/normalize.css/normalize.css",
    "node_modules/slick-carousel/slick/slick.css",
    // "node_modules/magnific-popup/dist/magnific-popup.css",
  ])
    .pipe(concat("_libs.scss"))
    .pipe(gulp.dest("app/scss"))
    .pipe(browser_Sync.stream());
}
function scss() {
  return src(path.src.css)
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(group_media())
    .pipe(
      webpcss({
        baseClass: ".webp1",
        replace_from: /\.(png|jpg|jpeg)/,
        replace_to: ".webp",
      })
    )
    .pipe(gulp.dest(path.build.css))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(path.build.css))
    .pipe(browser_Sync.stream());
}
function images() {
  return src(path.src.img)
    .pipe(
      webp({
        quality: 70,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 3,
        svgoPlugins: [
          {
            removeViewBox: false,
          },
        ],
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browser_Sync.stream());
}

function clean() {
  return del(path.clean);
}

function watchFile() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], scss);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}
let build = gulp.series(
  clean,
  cssLibs,
  jsLibrery,
  scss,
  gulp.parallel(js, html, images)
);
let watch = gulp.parallel(watchFile, build, browserSync);

exports.html = html;
exports.scss = scss;
exports.cssLibs = cssLibs;
exports.js = js;
exports.jsLibrery = jsLibrery;
exports.images = images;
exports.build = build;
exports.watch = watch;
exports.default = watch;

// npm i webp-converter@2.2.3 -D
