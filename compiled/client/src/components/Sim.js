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

var _App = require('../App.jsx');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './App.css';


var Sim = function (_Component) {
  _inherits(Sim, _Component);

  function Sim(props, context) {
    _classCallCheck(this, Sim);

    var _this = _possibleConstructorReturn(this, (Sim.__proto__ || Object.getPrototypeOf(Sim)).call(this, props, context));

    _this.state = {
      lowLimit: 0,
      highLimit: 5
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Sim, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.handleClick();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var newlowLimit = this.state.lowLimit + 5;
      var newhighLimit = this.state.highLimit + 5;
      this.setState({ lowLimit: newlowLimit });
      this.setState({ highLimit: newhighLimit });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var product = this.props.newItems.map(function (elem, index) {
        if (_this2.state.lowLimit < index <= _this2.state.highLimit) {
          return _react2.default.createElement(_Items2.default, { key: index, items: elem });
        }
      });
      return _react2.default.createElement(
        'div',
        { className: 'images-view' },
        _react2.default.createElement(
          'p',
          { onClick: this.handleClick },
          product
        )
      );
    }
  }]);

  return Sim;
}(_react.Component);

// before last element add a var items = this.props.itemList>map and
// assign {the var name} just before last div element.


exports.default = Sim;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TaW0uanN4Il0sIm5hbWVzIjpbIlNpbSIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibG93TGltaXQiLCJoaWdoTGltaXQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJuZXdsb3dMaW1pdCIsIm5ld2hpZ2hMaW1pdCIsInNldFN0YXRlIiwicHJvZHVjdCIsIm5ld0l0ZW1zIiwibWFwIiwiZWxlbSIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUZBOzs7SUFNcUJBLEc7OztBQUNuQixlQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUFBLDBHQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLENBREM7QUFFWEMsaUJBQVc7QUFGQSxLQUFiO0FBSUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQU4wQjtBQU8zQjs7Ozt5Q0FHcUI7QUFDcEIsV0FBS0QsV0FBTDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNRSxjQUFjLEtBQUtMLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixDQUExQztBQUNBLFVBQU1LLGVBQWUsS0FBS04sS0FBTCxDQUFXRSxTQUFYLEdBQXVCLENBQTVDO0FBQ0EsV0FBS0ssUUFBTCxDQUFjLEVBQUVOLFVBQVVJLFdBQVosRUFBZDtBQUNBLFdBQUtFLFFBQUwsQ0FBYyxFQUFFTCxXQUFXSSxZQUFiLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSUUsVUFBVSxLQUFLVixLQUFMLENBQVdXLFFBQVgsQ0FBb0JDLEdBQXBCLENBQTBCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN2RCxZQUFLLE9BQUtaLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQlcsS0FBdEIsSUFBK0IsT0FBS1osS0FBTCxDQUFXRSxTQUEvQyxFQUEyRDtBQUN6RCxpQkFBTyw4QkFBQyxlQUFELElBQU8sS0FBS1UsS0FBWixFQUFtQixPQUFPRCxJQUExQixHQUFQO0FBQ0Q7QUFDRixPQUphLENBQWQ7QUFLRSxhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFJLFNBQVMsS0FBS1IsV0FBbEI7QUFDS0s7QUFETDtBQURGLE9BREE7QUFPSDs7OztFQW5DOEJLLGdCOztBQXdDakM7QUFDQTs7O2tCQXpDcUJoQixHIiwiZmlsZSI6IlNpbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCAnLi9BcHAuY3NzJztcclxuaW1wb3J0IEl0ZW1zIGZyb20gJy4vSXRlbXMuanN4JztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAuanN4JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltIGV4dGVuZHMgQ29tcG9uZW50IHsgIFxyXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxvd0xpbWl0OiAwLFxyXG4gICAgICBoaWdoTGltaXQ6IDVcclxuICAgIH0gXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2soKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgY29uc3QgbmV3bG93TGltaXQgPSB0aGlzLnN0YXRlLmxvd0xpbWl0ICsgNTtcclxuICAgIGNvbnN0IG5ld2hpZ2hMaW1pdCA9IHRoaXMuc3RhdGUuaGlnaExpbWl0ICsgNTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb3dMaW1pdDogbmV3bG93TGltaXQgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaGlnaExpbWl0OiBuZXdoaWdoTGltaXQgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgcHJvZHVjdCA9IHRoaXMucHJvcHMubmV3SXRlbXMubWFwICggKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICggdGhpcy5zdGF0ZS5sb3dMaW1pdCA8IGluZGV4IDw9IHRoaXMuc3RhdGUuaGlnaExpbWl0ICkge1xyXG4gICAgICAgIHJldHVybiA8SXRlbXMga2V5PXtpbmRleH0gaXRlbXM9e2VsZW19IC8+O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZXMtdmlld1wiPlxyXG4gICAgICAgIDxwICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAge3Byb2R1Y3R9ICAgXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGJlZm9yZSBsYXN0IGVsZW1lbnQgYWRkIGEgdmFyIGl0ZW1zID0gdGhpcy5wcm9wcy5pdGVtTGlzdD5tYXAgYW5kXHJcbi8vIGFzc2lnbiB7dGhlIHZhciBuYW1lfSBqdXN0IGJlZm9yZSBsYXN0IGRpdiBlbGVtZW50LiJdfQ==