import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import newer from "gulp-newer"; // Проверка обновления
import browsersync from "browser-sync"; // Локальный сервер
import {deleteAsync} from "del"; // Удаление

// Экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  newer: newer,
  browsersync: browsersync,
  del: deleteAsync,
}