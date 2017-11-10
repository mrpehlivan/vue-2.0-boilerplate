const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const debug = env !== 'production'

let config = {
  devtool: debug ? 'cheap-module-source-map' : 'hidden-source-map',
  entry: {
    vendor: ['vue','vuex','vue-router'],
    bundle: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: debug? '[name].js':'[hash:8].[name].js',
    chunkFilename: debug? '[name].js':'[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(env)
      }
    }),    
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new ExtractTextPlugin({ 
      filename: debug?'[name].style.css':'[hash:8].style.css', 
      disable: false, allChunks: true 
    }),
    new HtmlWebpackPlugin({
      favicon:path.join(__dirname,'src/favicon.ico'),
      title: 'Vue js 2.0 Boilerplate',
      template: path.join(__dirname,'src/index.html'),
      inject:'body',
      hash:false,
      minify:{
        removeComments:false,
        collapseWhitespace:true
      }
    }),
  ],
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, exclude: /node_modules/ },
      { test: /\.vue$/,
        use: ['vue-loader'], 
        include: path.join(__dirname,'src')}, 
      { test: /\.js$/, 
        use: ['babel-loader'],
        exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/
      },
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[hash:8].[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 65
              },
              pngquant:{
                quality: '65-90',
                speed: 4
              },
              svgo:{
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              },
              gifsicle: {
                optimizationLevel: 7,
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7,
                interlaced: false
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[hash:8].[name].[ext]'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js','.vue','.scss','.css'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      actions: path.resolve(__dirname, 'src/store/actions'),
      getters: path.resolve(__dirname, 'src/store/getters'),
      modules: path.resolve(__dirname, 'src/store/modules'),
      store: path.resolve(__dirname, 'src/store'),
      vue: 'vue/dist/vue.js'
    }
  },
  node: {
    global: true,
    crypto: 'empty',
    process: true,
    console: false,
    __filename: 'mock',
    __dirname: 'mock',
    Buffer: true,
    setImmediate: true
  }
}

if (debug) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  config.devServer = {
    contentBase: path.join(__dirname, 'src'),
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    inline: true,
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

} else {
  config.plugins.push(  
    new UglifyJSPlugin()
  )
}

module.exports = config