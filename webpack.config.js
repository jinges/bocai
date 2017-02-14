var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\/|server\/|vue-material\//,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules\//,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.css$/,
        exclude: /node_modules\//,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.(woff|woff(2)|eot|ttf)$/, 
        loader: "file?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(png|jpg|jpeg|webP|gif|svg)$/,
        loader: 'url'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
