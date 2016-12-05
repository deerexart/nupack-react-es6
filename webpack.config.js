module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output:
  {  filename: './bundle.js'},
  module:{
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  externals: {
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
}

}
