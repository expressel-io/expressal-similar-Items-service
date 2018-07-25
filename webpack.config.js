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
      devtool: 'source-map'
    };