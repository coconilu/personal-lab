const { series, watch } = require("gulp");
const browserSync = require("browser-sync").create();

function serve(cb) {
  browserSync.init({
    server: {
      baseDir: "./web"
    }
  });
  watch("web/*.html").on("change", browserSync.reload);
  watch("web/*.js").on("change", browserSync.reload);
  watch("web/*.css").on("change", browserSync.reload);
  cb && cb();
}

exports.serve = serve;
exports.default = series(serve);