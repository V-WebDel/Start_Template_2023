import webpack from "webpack-stream";
import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";

export const js = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'main.js'
      }
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(app.gulp.dest(app.path.app.js))
    .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}

export const jsBuild = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS BUILD",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'main.js'
      }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
}

export const scripts = () => {
  return app.gulp.src([
    'src/libs/svgxuse-master/svgxuse.min.js',
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/gsap/dist/gsap.min.js',
    'node_modules/gsap/dist/ScrollTrigger.min.js',
  ])
  .pipe(concat('scripts.min.js'))
  .pipe(app.gulp.dest(app.path.app.js))
}

export const scriptsBuild = () => {
  return app.gulp.src([
    'src/libs/svgxuse-master/svgxuse.min.js',
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/gsap/dist/gsap.min.js',
    'node_modules/gsap/dist/ScrollTrigger.min.js',
  ])
  .pipe(concat('scripts.min.js'))
  .pipe(app.gulp.dest(app.path.build.js))
}