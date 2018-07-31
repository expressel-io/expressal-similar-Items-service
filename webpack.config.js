 var path = require('path');
 var nodeModules = path.join(__dirname, 'node_modules');// Absolute path to the project root
// var resolveRoot = path.join(projectRoot, 'node_modules');

 module.exports = {
      entry: __dirname + '/client/src/index.jsx',
      module: {
        rules: [
          { 
            test: [/\.jsx$/],
            exclude: /node_modules/,
            use: [ 'babel-loader' ],

            // query: {
            //   presets: ['env', 'react'],
            // }
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
      // resolveLoader: {
      //   root: nodeModules,
        
      // },
      resolve: {
        extensions: ['.jsx', '.js']
      },
      devtool: 'source-map'
    };