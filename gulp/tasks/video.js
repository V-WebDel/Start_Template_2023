export const video = () => {
  return app.gulp.src(app.path.src.video)
  .pipe(app.gulp.dest(app.path.app.video))
  .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}


export const videoBuild = () => {
  return app.gulp.src(app.path.src.video)
  .pipe(app.gulp.dest(app.path.build.video))
}