const mix = require('laravel-mix')

mix
  .js('resources/js/app.js', 'public/js')
  .extract(['axios', 'bootstrap', 'popper.js'])
  .sass('resources/sass/app.scss', 'public/css')
//if (!mix.inProduction) mix.sourceMaps(true, "source-map");
