'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import $ from 'jquery';


// import Sim from './Sim';

var Items = function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, (Items.__proto__ || Object.getPrototypeOf(Items)).apply(this, arguments));
  }

  _createClass(Items, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'items-view' },
        _react2.default.createElement(
          'div',
          { className: 'price-view' },
          _react2.default.createElement(
            'p',
            { onClick: this.handleClick },
            this.props.items.price
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'deliveryCost-view' },
          _react2.default.createElement(
            'p',
            { onClick: this.handleClick },
            this.props.items.deliveryCost
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'dateOfDelivery-view' },
          _react2.default.createElement(
            'p',
            { onClick: this.handleClick },
            this.props.items.dateOfDelivery
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'description-view' },
          _react2.default.createElement(
            'p',
            { onClick: this.handleClick },
            this.props.items.desc
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'ratings-view' },
          _react2.default.createElement(
            'p',
            { onClick: this.handleClick },
            this.props.items.rating
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'shopsAvalAt-view' },
          _react2.default.createElement(
            'p',
            { onClick: this.handleClick },
            this.props.items.shopsAvalAt
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          null,
          'Add to Cart'
        )
      );
    }
  }]);

  return Items;
}(_react.Component);

exports.default = Items;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9JdGVtcy5qc3giXSwibmFtZXMiOlsiSXRlbXMiLCJoYW5kbGVDbGljayIsInByb3BzIiwiaXRlbXMiLCJwcmljZSIsImRlbGl2ZXJ5Q29zdCIsImRhdGVPZkRlbGl2ZXJ5IiwiZGVzYyIsInJhdGluZyIsInNob3BzQXZhbEF0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztBQUVBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVksWUFBakI7QUFDRTtBQUFBO0FBQUEsY0FBSSxTQUFTLEtBQUtDLFdBQWxCO0FBQ0csaUJBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkM7QUFEcEI7QUFERixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBWSxtQkFBakI7QUFDRTtBQUFBO0FBQUEsY0FBSSxTQUFTLEtBQUtILFdBQWxCO0FBQ0csaUJBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkU7QUFEcEI7QUFERixTQU5GO0FBV0U7QUFBQTtBQUFBLFlBQUssV0FBWSxxQkFBakI7QUFDRTtBQUFBO0FBQUEsY0FBSSxTQUFTLEtBQUtKLFdBQWxCO0FBQ0csaUJBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkc7QUFEcEI7QUFERixTQVhGO0FBZ0JFLGlEQWhCRjtBQWlCRTtBQUFBO0FBQUEsWUFBSyxXQUFZLGtCQUFqQjtBQUNFO0FBQUE7QUFBQSxjQUFJLFNBQVMsS0FBS0wsV0FBbEI7QUFDRyxpQkFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCSTtBQURwQjtBQURGLFNBakJGO0FBc0JFLGlEQXRCRjtBQXVCRTtBQUFBO0FBQUEsWUFBSyxXQUFZLGNBQWpCO0FBQ0U7QUFBQTtBQUFBLGNBQUksU0FBUyxLQUFLTixXQUFsQjtBQUNHLGlCQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJLO0FBRHBCO0FBREYsU0F2QkY7QUE0QkUsaURBNUJGO0FBNkJFO0FBQUE7QUFBQSxZQUFLLFdBQVksa0JBQWpCO0FBQ0U7QUFBQTtBQUFBLGNBQUksU0FBUyxLQUFLUCxXQUFsQjtBQUNHLGlCQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJNO0FBRHBCO0FBREYsU0E3QkY7QUFrQ0UsaURBbENGO0FBbUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQ0gsT0FERjtBQXVDRDs7OztFQXpDZ0NDLGdCOztrQkFBZFYsSyIsImZpbGUiOiJJdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IFNpbSBmcm9tICcuL1NpbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7IFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtdmlld1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJwcmljZS12aWV3XCI+XHJcbiAgICAgICAgICA8cCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLnByaWNlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkZWxpdmVyeUNvc3Qtdmlld1wiPlxyXG4gICAgICAgICAgPHAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtcy5kZWxpdmVyeUNvc3R9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImRhdGVPZkRlbGl2ZXJ5LXZpZXdcIj5cclxuICAgICAgICAgIDxwICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMuZGF0ZU9mRGVsaXZlcnl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvbi12aWV3XCI+XHJcbiAgICAgICAgICA8cCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLmRlc2N9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyYXRpbmdzLXZpZXdcIj5cclxuICAgICAgICAgIDxwICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMucmF0aW5nfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic2hvcHNBdmFsQXQtdmlld1wiPlxyXG4gICAgICAgICAgPHAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtcy5zaG9wc0F2YWxBdH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz4gXHJcbiAgICAgICAgIDxidXR0b24+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19