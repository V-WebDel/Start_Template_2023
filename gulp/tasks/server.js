export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false,
    port: 3000,
    online: true
  })
}