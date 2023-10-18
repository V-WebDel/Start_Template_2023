import mainSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import cleanCss from "gulp-clean-css";
import concat from "gulp-concat";

const sass = gulpSass(mainSass)

const listStyles = [
  'node_modules/normalize.css/normalize.css',
  'node_modules/swiper/swiper-bundle.min.css',
];

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    }))
    .pipe(cleanCss({
      level: {
          1: {
              specialComments: 0
          }
      }
    }))
    // .pipe(rename({
    //   extname: ".min.css" // Добавить префикс для назания файла
    // }))
    .pipe(sourcemaps.write('.'))
    .pipe(app.gulp.dest(app.path.app.css))
    .pipe(app.plugins.browsersync.stream()) // Триггер обновления страницы
}

export const scssBuild = () => {
  return app.gulp.src(app.path.src.scss)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS BUILD",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    }))
    .pipe(cleanCss({
      level: {
          1: {
              specialComments: 0
          }
      }
    }))
    .pipe(app.gulp.dest(app.path.build.css))
}

export const styles = () => {
  return app.gulp.src( listStyles )
  .pipe(concat('styles.min.css'))
  .pipe(app.gulp.dest(app.path.app.css))
}

export const stylesBuild = () => {
  return app.gulp.src( listStyles )
//  .pipe(concat('styles.min.css'))
  .pipe(app.gulp.dest(app.path.build.css))
}