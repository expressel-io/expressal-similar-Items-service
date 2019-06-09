 var path = require('path');
 var nodeModules = path.join(__dirname, 'node_modules');// Absolute path to the project root


 module.exports = {
      entry: __dirname + '/client/src/index.jsx',
      module: {
        rules: [
          { 
            test: [/\.jsx$/],
            exclude: /node_modules/,
            use: [ 'babel-loader' ],

          },
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          }
        ]
      },
       output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist',
        
      },
   
      resolve: {
        extensions: ['.jsx', '.js']
      },
      devtool: 'source-map'
    };