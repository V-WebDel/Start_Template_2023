// Основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from "./gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";


// Передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Импорт задач 
import { reset, resetBuild } from "./gulp/tasks/reset.js";
import { pug2html, pug2htmlBuild } from "./gulp/tasks/html.js";
import { scss, scssBuild, styles, stylesBuild } from "./gulp/tasks/css.js";
import { js, jsBuild, scripts, scriptsBuild } from "./gulp/tasks/js.js";
import { images, webpp, imagesBuild, webppBuild } from "./gulp/tasks/images.js";
import { fonts, fontsBuild } from "./gulp/tasks/fonts.js";
import { svgSprite, svgSpriteBuild } from "./gulp/tasks/svgSprite.js";
import { favicons, faviconsBuild } from "./gulp/tasks/favicons.js";
import { video, videoBuild } from "./gulp/tasks/video.js";
import { server } from "./gulp/tasks/server.js";

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, pug2html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.images, webpp);
    gulp.watch(path.watch.fonts, fonts);
    gulp.watch(path.watch.svgicons, svgSprite);
    gulp.watch(path.watch.favicons, favicons);
    gulp.watch(path.watch.video, video);
}

// Основные задачи
const mainTasks = gulp.parallel(fonts, pug2html, scss, styles, js, scripts, images, webpp, svgSprite, favicons, video);
const buildTasks = gulp.parallel(fontsBuild, pug2htmlBuild, scssBuild, stylesBuild, jsBuild, scriptsBuild, imagesBuild, webppBuild, svgSpriteBuild, faviconsBuild, videoBuild);

// Построение сценариев выполения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(resetBuild, buildTasks);


// Выполнение сценария по умолчанию
gulp.task('default', dev)


// Выполнение сценария в продакшен
gulp.task('build', build)