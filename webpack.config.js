const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.tsx',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval' : 'hidden-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
                debug: true,
              },
            ],
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
          ],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'dist/[name].js',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      meta: {
        'og:title': { name: 'title', property: 'og:title', content: 'Hair-Kut' },
        'og:description': {
          name: 'description',
          property: 'og:description',
          content: '가상 헤어스타일링 제공 플랫폼',
        },
        'og:type': { property: 'og:type', content: 'website' },
        'og:image': {
          name: 'image',
          property: 'og:image',
          content: 'https://home-hair-kut.vercel.app/img/logo.png',
        },
        'og:image:width': { property: 'og:image:width', content: '300' },
        'og:image:height': { property: 'og:image:height', content: '300' },
      },
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: isDevelopment ? 'development' : 'production',
    }),
    new Dotenv({ systemvars: true }),
  ],
  devServer: {
    hot: true,
    port: 3000,
  },
};
