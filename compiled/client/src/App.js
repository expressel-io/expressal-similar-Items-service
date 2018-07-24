'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sim = require('./components/Sim.jsx');

var _Sim2 = _interopRequireDefault(_Sim);

var _Items = require('./components/Items.jsx');

var _Items2 = _interopRequireDefault(_Items);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Data from '../database/index.js';


var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      itemList: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      console.log('i am here');
      _axios2.default.get('/api/prods').then(function (response) {
        console.log('response is', response.data);
        self.setState({ itemList: response.data });
        self.setState({ id: response.data.id });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App-header' },
        _react2.default.createElement(
          'div',
          { className: 'App-product-carousel-column' },
          _react2.default.createElement(
            'div',
            { className: 'App-title' },
            'Similar Items',
            _react2.default.createElement(_Sim2.default, { newItems: this.state.itemList }),
            _react2.default.createElement(_Items2.default, { items: this.state.itemList })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaXRlbUxpc3QiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInNldFN0YXRlIiwiaWQiLCJjYXRjaCIsImVycm9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7OztBQURBOzs7SUFHcUJBLEc7OztBQUNuQixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVTtBQURDLEtBQWI7QUFGaUI7QUFLbEI7Ozs7eUNBR29CO0FBQ25CLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBQyxzQkFBTUMsR0FBTixDQUFVLFlBQVYsRUFDR0MsSUFESCxDQUNRLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkJMLGdCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkksU0FBU0MsSUFBcEM7QUFDQVAsYUFBS1EsUUFBTCxDQUFjLEVBQUVULFVBQVVPLFNBQVNDLElBQXJCLEVBQWQ7QUFDQVAsYUFBS1EsUUFBTCxDQUFjLEVBQUVDLElBQUlILFNBQVNDLElBQVQsQ0FBY0UsRUFBcEIsRUFBZDtBQUVELE9BTkgsRUFPR0MsS0FQSCxDQU9TLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckJWLGdCQUFRQyxHQUFSLENBQVlTLEtBQVo7QUFDRCxPQVRIO0FBVUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSw2QkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUFBO0FBR0UsMENBQUMsYUFBRCxJQUFLLFVBQVUsS0FBS2IsS0FBTCxDQUFXQyxRQUExQixHQUhGO0FBSUUsMENBQUMsZUFBRCxJQUFPLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxRQUF6QjtBQUpGO0FBREY7QUFERixPQURGO0FBYUQ7Ozs7RUF0QzhCYSxnQjs7a0JBQVpoQixHIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaW0gZnJvbSAnLi9jb21wb25lbnRzL1NpbS5qc3gnO1xyXG5pbXBvcnQgSXRlbXMgZnJvbSAnLi9jb21wb25lbnRzL0l0ZW1zLmpzeCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBEYXRhIGZyb20gJy4uL2RhdGFiYXNlL2luZGV4LmpzJztcclxuaW1wb3J0ICcuL0FwcC5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpdGVtTGlzdDogW10sXHJcbiAgICB9ICBcclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygnaSBhbSBoZXJlJyk7XHJcbiAgICBheGlvcy5nZXQoJy9hcGkvcHJvZHMnKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSBpcycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyBpdGVtTGlzdDogcmVzcG9uc2UuZGF0YSB9KTtcclxuICAgICAgICBzZWxmLnNldFN0YXRlKHsgaWQ6IHJlc3BvbnNlLmRhdGEuaWQgfSk7XHJcblxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAtcHJvZHVjdC1jYXJvdXNlbC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIFNpbWlsYXIgSXRlbXNcclxuXHJcbiAgICAgICAgICAgIDxTaW0gbmV3SXRlbXM9e3RoaXMuc3RhdGUuaXRlbUxpc3R9IC8+XHJcbiAgICAgICAgICAgIDxJdGVtcyBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtTGlzdH0gLz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn0iXX0=