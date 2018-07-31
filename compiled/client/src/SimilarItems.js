'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Similar = require('./components/Similar');

var _Similar2 = _interopRequireDefault(_Similar);

require('./styles/Items.css');

require('./styles/App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimilarItems = function (_Component) {
  _inherits(SimilarItems, _Component);

  function SimilarItems(props) {
    _classCallCheck(this, SimilarItems);

    var _this = _possibleConstructorReturn(this, (SimilarItems.__proto__ || Object.getPrototypeOf(SimilarItems)).call(this, props));

    _this.state = {
      itemList: [],
      itemId: 1,
      counter: 0
    };
    return _this;
  }

  _createClass(SimilarItems, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var itemId = this.state.itemId;

      _axios2.default.get('/api/products/' + itemId).then(function (response) {
        _this2.setState({ itemList: response.data });
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _this3 = this;

      console.log('clicked');
      var itemId = this.state.itemId;

      _axios2.default.get('/api/products/next/' + itemId).then(function (response) {
        _this3.setState({ itemId: response.data[0].itemId });
        var newCounter = _this3.state.counter;
        _this3.setState({ counter: newCounter + 1 });
        console.log('count', newCounter + 1);
        _this3.setState({ itemList: response.data });
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: 'handleClickAgain',
    value: function handleClickAgain() {
      var _this4 = this;

      console.log('clicked');
      var itemId = this.state.itemId;

      _axios2.default.get('/api/products/previous/' + itemId).then(function (response) {
        _this4.setState({ itemId: response.data[0].itemId });
        var newCounter = _this4.state.counter;
        _this4.setState({ counter: newCounter - 1 });
        console.log('count', newCounter - 1);
        _this4.setState({ itemList: response.data });
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.counter === 0) {
        return _react2.default.createElement(
          'div',
          { className: 'Items-productCard' },
          _react2.default.createElement(
            'div',
            { className: 'Items-layoutColumn' },
            _react2.default.createElement(
              'div',
              { className: 'App-title' },
              'Similar Items',
              _react2.default.createElement(_Similar2.default, { newItems: this.state.itemList })
            )
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'next', onClick: this.handleClick.bind(this) },
            '\xBB'
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Items-productCard' },
          _react2.default.createElement(
            'a',
            { href: '#', 'class': 'previous', onClick: this.handleClickAgain.bind(this) },
            '\xAB'
          ),
          _react2.default.createElement(
            'div',
            { className: 'Items-layoutColumn' },
            _react2.default.createElement(
              'div',
              { className: 'App-title' },
              'Similar Items',
              _react2.default.createElement(_Similar2.default, { newItems: this.state.itemList })
            )
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'next', onClick: this.handleClick.bind(this) },
            '\xBB'
          )
        );
      }
    }
  }]);

  return SimilarItems;
}(_react.Component);

exports.default = SimilarItems;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvU2ltaWxhckl0ZW1zLmpzeCJdLCJuYW1lcyI6WyJTaW1pbGFySXRlbXMiLCJwcm9wcyIsInN0YXRlIiwiaXRlbUxpc3QiLCJpdGVtSWQiLCJjb3VudGVyIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm5ld0NvdW50ZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVDbGlja0FnYWluIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxZOzs7QUFDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsY0FBUSxDQUZHO0FBR1hDLGVBQVM7QUFIRSxLQUFiO0FBRmlCO0FBT2xCOzs7O3dDQUVtQjtBQUFBOztBQUFBLFVBQ1ZELE1BRFUsR0FDQyxLQUFLRixLQUROLENBQ1ZFLE1BRFU7O0FBRWxCRSxzQkFBTUMsR0FBTixvQkFBMkJILE1BQTNCLEVBQ0dJLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsZUFBS0MsUUFBTCxDQUFjLEVBQUVQLFVBQVVNLFNBQVNFLElBQXJCLEVBQWQ7QUFDRCxPQUhILEVBSUdDLEtBSkgsQ0FJUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLGdCQUFRRCxLQUFSLENBQWNBLEtBQWQ7QUFDRCxPQU5IO0FBT0Q7OztrQ0FFYTtBQUFBOztBQUNaQyxjQUFRQyxHQUFSLENBQVksU0FBWjtBQURZLFVBRUpYLE1BRkksR0FFTyxLQUFLRixLQUZaLENBRUpFLE1BRkk7O0FBR1pFLHNCQUFNQyxHQUFOLHlCQUFnQ0gsTUFBaEMsRUFDR0ksSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixlQUFLQyxRQUFMLENBQWMsRUFBRU4sUUFBUUssU0FBU0UsSUFBVCxDQUFjLENBQWQsRUFBaUJQLE1BQTNCLEVBQWQ7QUFDQSxZQUFNWSxhQUFhLE9BQUtkLEtBQUwsQ0FBV0csT0FBOUI7QUFDQSxlQUFLSyxRQUFMLENBQWMsRUFBRUwsU0FBU1csYUFBVyxDQUF0QixFQUFkO0FBQ0FGLGdCQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQkMsYUFBVyxDQUFoQztBQUNBLGVBQUtOLFFBQUwsQ0FBYyxFQUFFUCxVQUFVTSxTQUFTRSxJQUFyQixFQUFkO0FBQ0QsT0FQSCxFQVFHQyxLQVJILENBUVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyxnQkFBUUQsS0FBUixDQUFjQSxLQUFkO0FBQ0QsT0FWSDtBQVdEOzs7dUNBRWtCO0FBQUE7O0FBQ2pCQyxjQUFRQyxHQUFSLENBQVksU0FBWjtBQURpQixVQUVUWCxNQUZTLEdBRUUsS0FBS0YsS0FGUCxDQUVURSxNQUZTOztBQUdqQkUsc0JBQU1DLEdBQU4sNkJBQW9DSCxNQUFwQyxFQUNHSSxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLGVBQUtDLFFBQUwsQ0FBYyxFQUFFTixRQUFRSyxTQUFTRSxJQUFULENBQWMsQ0FBZCxFQUFpQlAsTUFBM0IsRUFBZDtBQUNBLFlBQU1ZLGFBQWEsT0FBS2QsS0FBTCxDQUFXRyxPQUE5QjtBQUNBLGVBQUtLLFFBQUwsQ0FBYyxFQUFFTCxTQUFTVyxhQUFXLENBQXRCLEVBQWQ7QUFDQUYsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCQyxhQUFXLENBQWhDO0FBQ0EsZUFBS04sUUFBTCxDQUFjLEVBQUVQLFVBQVVNLFNBQVNFLElBQXJCLEVBQWQ7QUFDRCxPQVBILEVBUUdDLEtBUkgsQ0FRUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLGdCQUFRRCxLQUFSLENBQWNBLEtBQWQ7QUFDRCxPQVZIO0FBV0Q7Ozs2QkFFUTtBQUNQLFVBQUksS0FBS1gsS0FBTCxDQUFXRyxPQUFYLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCLGVBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxXQUFmO0FBQUE7QUFFQSw0Q0FBQyxpQkFBRCxJQUFTLFVBQVUsS0FBS0gsS0FBTCxDQUFXQyxRQUE5QjtBQUZBO0FBREYsV0FERjtBQU9FO0FBQUE7QUFBQSxjQUFHLE1BQUssR0FBUixFQUFZLFdBQVUsTUFBdEIsRUFBNkIsU0FBUyxLQUFLYyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF0QztBQUFBO0FBQUE7QUFQRixTQURGO0FBV0QsT0FaRCxNQVlPO0FBQ0wsZUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSLEVBQVksU0FBTSxVQUFsQixFQUE2QixTQUFTLEtBQUtDLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQUF0QztBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxXQUFmO0FBQUE7QUFFSSw0Q0FBQyxpQkFBRCxJQUFTLFVBQVUsS0FBS2hCLEtBQUwsQ0FBV0MsUUFBOUI7QUFGSjtBQURGLFdBRkY7QUFRRTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVIsRUFBWSxXQUFVLE1BQXRCLEVBQThCLFNBQVMsS0FBS2MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkM7QUFBQTtBQUFBO0FBUkYsU0FERjtBQVlEO0FBQ0Y7Ozs7RUFoRnVDRSxnQjs7a0JBQXJCcEIsWSIsImZpbGUiOiJTaW1pbGFySXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBTaW1pbGFyIGZyb20gJy4vY29tcG9uZW50cy9TaW1pbGFyJztcbmltcG9ydCAnLi9zdHlsZXMvSXRlbXMuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvQXBwLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbWlsYXJJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtTGlzdDogW10sXG4gICAgICBpdGVtSWQ6IDEsXG4gICAgICBjb3VudGVyOiAwLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGl0ZW1JZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdHMvJHtpdGVtSWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbUxpc3Q6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pOyAgIFxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgIGNvbnN0IHsgaXRlbUlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy9uZXh0LyR7aXRlbUlkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1JZDogcmVzcG9uc2UuZGF0YVswXS5pdGVtSWR9KTtcbiAgICAgICAgY29uc3QgbmV3Q291bnRlciA9IHRoaXMuc3RhdGUuY291bnRlcjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IG5ld0NvdW50ZXIrMSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvdW50JywgbmV3Q291bnRlcisxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1MaXN0OiByZXNwb25zZS5kYXRhIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrQWdhaW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICBjb25zdCB7IGl0ZW1JZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdHMvcHJldmlvdXMvJHtpdGVtSWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbUlkOiByZXNwb25zZS5kYXRhWzBdLml0ZW1JZH0pO1xuICAgICAgICBjb25zdCBuZXdDb3VudGVyID0gdGhpcy5zdGF0ZS5jb3VudGVyO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogbmV3Q291bnRlci0xIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnY291bnQnLCBuZXdDb3VudGVyLTEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbUxpc3Q6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZXIgPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSXRlbXMtcHJvZHVjdENhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1zLWxheW91dENvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAtdGl0bGVcIj5cbiAgICAgICAgICAgICAgU2ltaWxhciBJdGVtc1xuICAgICAgICAgICAgPFNpbWlsYXIgbmV3SXRlbXM9e3RoaXMuc3RhdGUuaXRlbUxpc3R9IC8+ICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5leHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9PiZyYXF1bzs8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtcy1wcm9kdWN0Q2FyZFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwcmV2aW91c1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tBZ2Fpbi5iaW5kKHRoaXMpfT4mbGFxdW87PC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSXRlbXMtbGF5b3V0Q29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFNpbWlsYXIgSXRlbXNcbiAgICAgICAgICAgICAgICA8U2ltaWxhciBuZXdJdGVtcz17dGhpcy5zdGF0ZS5pdGVtTGlzdH0gLz4gIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuZXh0XCIgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0+JnJhcXVvOzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApOyBcbiAgICB9XG4gIH1cbn1cbiJdfQ==