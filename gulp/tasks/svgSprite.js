import gulpSvgSprite from "gulp-svg-sprite";
import svgMin from "gulp-svgmin";

export const svgSprite = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(svgMin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulpSvgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg", // Имя файла SVG-спрайта
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.app.images))
    .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}

export const svgSpriteBuild = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(svgMin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulpSvgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg",
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}