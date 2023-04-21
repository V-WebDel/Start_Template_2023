import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(app.plugins.newer(app.path.app.images))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 4,
    }))
    .pipe(app.gulp.dest(app.path.app.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.app.images))
    .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}

export const webpp = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "WEBP",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(app.plugins.newer(app.path.app.webp))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.app.webp))
    .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}

export const imagesBuild = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES BUILD",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 4,
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
}

export const webppBuild = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "WEBP BUILD",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.webp))
}