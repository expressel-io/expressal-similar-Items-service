'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Items = require('./Items.jsx');

var _Items2 = _interopRequireDefault(_Items);

require('../styles/App.css');

require('../styles/Items.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Similar = function (_Component) {
  _inherits(Similar, _Component);

  function Similar(props, context) {
    _classCallCheck(this, Similar);

    // this.state = {
    //   lowLimit: 0,
    //   highLimit: 4,
    // };
    var _this = _possibleConstructorReturn(this, (Similar.__proto__ || Object.getPrototypeOf(Similar)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Similar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleClick();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      //handle click to open page corresponding to item id
      //not sure whether this functionality is required now.
    }
  }, {
    key: 'render',
    value: function render() {
      var product = this.props.newItems.map(function (elem, index) {
        return _react2.default.createElement(_Items2.default, { key: index, item: elem });
      });
      return _react2.default.createElement(
        'div',
        { className: 'Items-productCard' },
        _react2.default.createElement(
          'div',
          { className: 'Items-layoutColumn' },
          _react2.default.createElement(
            'div',
            { onClick: this.handleClick },
            product
          )
        )
      );
    }
  }]);

  return Similar;
}(_react.Component);

exports.default = Similar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TaW1pbGFyLmpzeCJdLCJuYW1lcyI6WyJTaW1pbGFyIiwicHJvcHMiLCJjb250ZXh0IiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwicHJvZHVjdCIsIm5ld0l0ZW1zIiwibWFwIiwiZWxlbSIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxPOzs7QUFDbkIsbUJBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCO0FBQUE7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBTDBCLGtIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFNMUIsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQU4wQjtBQU8zQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsV0FBTDtBQUNEOzs7a0NBRWE7QUFDWjtBQUNBO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLFVBQVUsS0FBS0osS0FBTCxDQUFXSyxRQUFYLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdkQsZUFBTyw4QkFBQyxlQUFELElBQU8sS0FBS0EsS0FBWixFQUFtQixNQUFNRCxJQUF6QixHQUFQO0FBQ0QsT0FGZSxDQUFoQjtBQUdBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxTQUFTLEtBQUtMLFdBQW5CO0FBQ0dFO0FBREg7QUFERjtBQURGLE9BREY7QUFTRDs7OztFQWhDa0NLLGdCOztrQkFBaEJWLE8iLCJmaWxlIjoiU2ltaWxhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEl0ZW1zIGZyb20gJy4vSXRlbXMuanN4JztcbmltcG9ydCAnLi4vc3R5bGVzL0FwcC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvSXRlbXMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltaWxhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIC8vIHRoaXMuc3RhdGUgPSB7XG4gICAgLy8gICBsb3dMaW1pdDogMCxcbiAgICAvLyAgIGhpZ2hMaW1pdDogNCxcbiAgICAvLyB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZUNsaWNrKCk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICAvL2hhbmRsZSBjbGljayB0byBvcGVuIHBhZ2UgY29ycmVzcG9uZGluZyB0byBpdGVtIGlkXG4gICAgLy9ub3Qgc3VyZSB3aGV0aGVyIHRoaXMgZnVuY3Rpb25hbGl0eSBpcyByZXF1aXJlZCBub3cuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvZHVjdCA9IHRoaXMucHJvcHMubmV3SXRlbXMubWFwKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxJdGVtcyBrZXk9e2luZGV4fSBpdGVtPXtlbGVtfSAvPjtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtcy1wcm9kdWN0Q2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1zLWxheW91dENvbHVtblwiPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICB7cHJvZHVjdH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=