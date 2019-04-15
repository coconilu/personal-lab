const { series, watch } = require("gulp");
const browserSync = require("browser-sync").create();

function serve(cb) {
  browserSync.init({
    server: {
      baseDir: "./html-demos"
    }
  });
  watch("html-demos/*.html").on("change", browserSync.reload);
  watch("html-demos/*.js").on("change", browserSync.reload);
  watch("html-demos/*.css").on("change", browserSync.reload);
  cb && cb();
}

exports.serve = serve;
exports.default = series(serve);