'use strict';

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [{
      test: [/\.jsx$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react']
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: "style-loader" },
      //     { loader: "css-loader" },
      //     { loader: "file-loader" }
      //   ]
      // }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'

  },
  devtool: 'source-map'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyeSIsIl9fZGlybmFtZSIsInJ1bGVzIiwidGVzdCIsImV4Y2x1ZGUiLCJsb2FkZXIiLCJxdWVyeSIsInByZXNldHMiLCJvdXRwdXQiLCJmaWxlbmFtZSIsInBhdGgiLCJkZXZ0b29sIl0sIm1hcHBpbmdzIjoiOztBQUFDQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ1pDLFNBQU9DLFlBQVksdUJBRFA7QUFFWkgsVUFBUTtBQUNOSSxXQUFPLENBQ0w7QUFDRUMsWUFBTSxDQUFDLFFBQUQsQ0FEUjtBQUVFQyxlQUFTLGNBRlg7QUFHRUMsY0FBUSxjQUhWO0FBSUVDLGFBQU87QUFDTEMsaUJBQVMsQ0FBQyxLQUFELEVBQVEsT0FBUjtBQURKO0FBSVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBLEtBREs7QUFERCxHQUZJO0FBc0JYQyxVQUFRO0FBQ1BDLGNBQVUsV0FESDtBQUVQQyxVQUFNVCxZQUFZOztBQUZYLEdBdEJHO0FBMkJaVSxXQUFTO0FBM0JHLENBQWpCIiwiZmlsZSI6IndlYnBhY2suY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICBlbnRyeTogX19kaXJuYW1lICsgJy9jbGllbnQvc3JjL2luZGV4LmpzeCcsXHJcbiAgICAgIG1vZHVsZToge1xyXG4gICAgICAgIHJ1bGVzOiBbXHJcbiAgICAgICAgICB7IFxyXG4gICAgICAgICAgICB0ZXN0OiBbL1xcLmpzeCQvXSxcclxuICAgICAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXHJcbiAgICAgICAgICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcicsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgcHJlc2V0czogWydlbnYnLCAncmVhY3QnXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgLy8gICB0ZXN0OiAvXFwuY3NzJC8sXHJcbiAgICAgICAgICAvLyAgIHVzZTogW1xyXG4gICAgICAgICAgLy8gICAgIHsgbG9hZGVyOiBcInN0eWxlLWxvYWRlclwiIH0sXHJcbiAgICAgICAgICAvLyAgICAgeyBsb2FkZXI6IFwiY3NzLWxvYWRlclwiIH0sXHJcbiAgICAgICAgICAvLyAgICAgeyBsb2FkZXI6IFwiZmlsZS1sb2FkZXJcIiB9XHJcbiAgICAgICAgICAvLyAgIF1cclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBmaWxlbmFtZTogJ2J1bmRsZS5qcycsXHJcbiAgICAgICAgcGF0aDogX19kaXJuYW1lICsgJy9jbGllbnQvZGlzdCcsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGRldnRvb2w6ICdzb3VyY2UtbWFwJ1xyXG4gICAgfTsiXX0=