import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

export const fonts = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(app.plugins.newer(app.path.app.fonts))
    .pipe(ttf2woff()) // конвертируем в .woff
    .pipe(app.gulp.dest(app.path.app.fonts))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    .pipe(app.plugins.newer(app.path.app.fonts))
    .pipe(ttf2woff2()) // конвертируем в .woff2
    .pipe(app.gulp.dest(app.path.app.fonts))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.eot`))
    .pipe(app.gulp.dest(app.path.app.fonts))
    .pipe(app.plugins.browsersync.stream());
};

export const fontsBuild = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS BUILD",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(ttf2woff())
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.eot`))
    .pipe(app.gulp.dest(app.path.build.fonts));
};
