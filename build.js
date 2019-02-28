const webpack = require('webpack')
const Config = require('webpack-chain')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path')

// console.log(webpack)

const config = new Config();

// console.log(JSON.stringify(config))

// console.dir(config)

config.mode("development")

config.entry('index').add('babel-polyfill').add('./src/index.js').end().output.path(path.resolve(__dirname, 'dist')).filename('[name].bundle.js');

// config.module.rule('lint').test(/\.js$/).pre().include.add(path.resolve(__dirname, 'src')).end().use('eslint').loader('eslint-loader').options({ rules: { semi: 'off' } });

// config.module.rule('compile').test(/\.js$/).include.add(path.resolve(__dirname, 'src')).add(path.resolve(__dirname, 'test')).end().use('babel').loader('babel-loader').options({preset: [['@babel/preset-env', {modules: false}]]})

config.plugin('clean').use(CleanWebpackPlugin, [['dist'], { root: __dirname, dry: false }]);

const configOBJ = config.toConfig();

// console.log(configOBJ)
// console.log(configOBJ.module.rules[0])

webpack(configOBJ, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err || stats.hasErrors())
  }
  console.log(stats.toJson())
})

module.exports = configOBJ;