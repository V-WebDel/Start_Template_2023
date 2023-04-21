import pug from "gulp-pug";
import formatHtml from "gulp-format-html";

export const pug2html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(pug({
      pretty: true,
      // verbose: true // Показать какой файл был изменен
    }))
    .pipe(formatHtml()) 
    .pipe(app.gulp.dest(app.path.app.html))
    .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}


export const pug2htmlBuild = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(pug({
      pretty: true,
    }))
    .pipe(formatHtml()) 
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}