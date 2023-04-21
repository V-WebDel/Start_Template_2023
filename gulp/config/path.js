// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./production`;
const appFolder = `./app`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    webp: `${buildFolder}/img/webp/`,
    fonts: `${buildFolder}/fonts/`,
    favicons: `${buildFolder}/favicons/`,
    video: `${buildFolder}/video/`,
  },
  src: {
    html: `${srcFolder}/pug/*.pug`,
    scss: `${srcFolder}/scss/main.scss`,
    js: `${srcFolder}/js/main.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif}`,
    webp: `${appFolder}/img/webp/**/*.webp`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.*`,
    svgicons: `${srcFolder}/SVG-for-sprite/*.svg`,
    favicons: `${srcFolder}/favicons/**/*.*`,
    video: `${srcFolder}/video/**/*.*`,
  },
  app: {
    html: `${appFolder}/`,
    css: `${appFolder}/css/`,
    js: `${appFolder}/js/`,
    images: `${appFolder}/img/`,
    webp: `${appFolder}/img/webp/`,
    fonts: `${appFolder}/fonts/`,
    favicons: `${appFolder}/favicons/`,
    video: `${appFolder}/video/`,
  },
  watch: {
    html: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    svgicons: `${srcFolder}/SVG-for-sprite/*.svg`,
    favicons: `${srcFolder}/favicons/*.*`,
    video: `${srcFolder}/video/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}