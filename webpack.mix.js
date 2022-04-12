let mix = require('laravel-mix')

mix.disableNotifications()
mix.setPublicPath('dist')
mix.sourceMaps(false, 'source-map')
// mix.extract()

mix.options({
  postCss: [
    require('postcss-sort-media-queries')(),
    require('postcss-combine-duplicated-selectors')()
  ]
})

mix.browserSync({
  server: './',
  open: false,
  notify: false,
  watch: [
    'index.html'
  ]
})

mix.autoload({
  jquery: ['$', 'window.jQuery', 'jQuery']
})

mix.js('src/js/main.js', 'js')

mix.sass('src/scss/main.scss', 'css')
