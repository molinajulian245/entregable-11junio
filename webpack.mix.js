const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/css/bootstrap.min.css',
    'resources/css/icons.min.css',
    'resources/css/app.min.css',
],'public/css/app.css')
    .scripts([
        'resources/js/jquery.min.js',
        'resources/js/bootstrap.bundle.min.js',
        'resources/js/metisMenu.min.js',
        'resources/js/simplebar.min.js',
        'resources/js/waves.min.js',
        'resources/js/jquery.sparkline.min.js',
        'resources/js/app.js',
    ],'public/js/app.js');
