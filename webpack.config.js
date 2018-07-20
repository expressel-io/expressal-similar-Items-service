 module.exports = {
      entry: __dirname + '/client/src/index.jsx',
      module: {
        rules: [
          { 
            test: [/\.jsx$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['env', 'react'],
            }
          }
          // {
          //   test: /\.css$/,
          //   use: [
          //     { loader: "style-loader" },
          //     { loader: "css-loader" },
          //     { loader: "file-loader" }
          //   ]
          // }
        ]
      },
       output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist',
        
      },
      devtool: 'source-map'
    };