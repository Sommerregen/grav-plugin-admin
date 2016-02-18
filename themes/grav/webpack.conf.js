var path    = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/main.js',
        vendor: [
            'chartist',
            'selectize',
            'remodal',
            'toastr',
            'bootstrap',
            'sortablejs',
            'jquery-slugify',
            'dropzone',
            'eonasdan-bootstrap-datetimepicker'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        library: 'Grav'
    },
    externals: {
        jquery: 'jQuery',
        'grav-config': 'GravAdmin'
    },
    module: {
        preLoaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: { presets: ['es2015'] }
            }
        ]
    }
};
