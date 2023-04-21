export const favicons = () => {
  return app.gulp.src(app.path.src.favicons)
  .pipe(app.gulp.dest(app.path.app.favicons))
  .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}


export const faviconsBuild = () => {
  return app.gulp.src(app.path.src.favicons)
  .pipe(app.gulp.dest(app.path.build.favicons))
}