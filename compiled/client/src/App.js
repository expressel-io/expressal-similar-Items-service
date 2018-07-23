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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Data from '../database/index.js';
// import './App.css';

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
      _axios2.default.get('/api/items').then(function (response) {
        console.log('response is', response);
        self.setState({ itemList: response.data });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'product-carousel-container' },
        _react2.default.createElement(
          'div',
          { className: 'product-carousel-column' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaXRlbUxpc3QiLCJzZWxmIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7SUFFcUJBLEc7OztBQUNuQixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ2JBLEtBRGE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVTtBQURDLEtBQWI7QUFGaUI7QUFLbEI7Ozs7eUNBR3FCO0FBQ3BCLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxzQkFBTUMsR0FBTixDQUFVLFlBQVYsRUFDR0MsSUFESCxDQUNRLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEJDLGdCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkYsUUFBM0I7QUFDQUosYUFBS08sUUFBTCxDQUFjLEVBQUNSLFVBQVdLLFNBQVNJLElBQXJCLEVBQWQ7QUFDRCxPQUpILEVBS0dDLEtBTEgsQ0FLUyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCTCxnQkFBUUMsR0FBUixDQUFZSSxLQUFaO0FBQ0QsT0FQSDtBQVFEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsNEJBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHlCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxPQUFmO0FBQUE7QUFHRSwwQ0FBQyxhQUFELElBQUssVUFBVSxLQUFLWixLQUFMLENBQVdDLFFBQTFCLEdBSEY7QUFJRSwwQ0FBQyxlQUFELElBQU8sT0FBTyxLQUFLRCxLQUFMLENBQVdDLFFBQXpCO0FBSkY7QUFERjtBQURGLE9BREY7QUFhRDs7OztFQW5DOEJZLGdCOztrQkFBWmYsRyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2ltIGZyb20gJy4vY29tcG9uZW50cy9TaW0uanN4JztcclxuaW1wb3J0IEl0ZW1zIGZyb20gJy4vY29tcG9uZW50cy9JdGVtcy5qc3gnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgRGF0YSBmcm9tICcuLi9kYXRhYmFzZS9pbmRleC5qcyc7XHJcbi8vIGltcG9ydCAnLi9BcHAuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7ICBcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXRlbUxpc3Q6IFtdLFxyXG4gICAgfSBcclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2l0ZW1zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIGlzJywgcmVzcG9uc2UpO1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe2l0ZW1MaXN0IDogcmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJvdXNlbC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgU2ltaWxhciBJdGVtc1xyXG5cclxuICAgICAgICAgICAgPFNpbSBuZXdJdGVtcz17dGhpcy5zdGF0ZS5pdGVtTGlzdH0vPlxyXG4gICAgICAgICAgICA8SXRlbXMgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbUxpc3R9Lz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApOyBcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=