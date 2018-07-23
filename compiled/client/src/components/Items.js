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
            'select',
            { onClick: this.handleClick },
            this.props.items.price
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'deliveryCost-view' },
          _react2.default.createElement(
            'select',
            { onClick: this.handleClick },
            this.props.items.deliveryCost
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'dateOfDelivery-view' },
          _react2.default.createElement(
            'select',
            { onClick: this.handleClick },
            this.props.items.dateOfDelivery
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'description-view' },
          _react2.default.createElement(
            'select',
            { onClick: this.handleClick },
            this.props.items.desc
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'ratings-view' },
          _react2.default.createElement(
            'select',
            { onClick: this.handleClick },
            this.props.items.rating
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'shopsAvalAt-view' },
          _react2.default.createElement(
            'select',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9JdGVtcy5qc3giXSwibmFtZXMiOlsiSXRlbXMiLCJoYW5kbGVDbGljayIsInByb3BzIiwiaXRlbXMiLCJwcmljZSIsImRlbGl2ZXJ5Q29zdCIsImRhdGVPZkRlbGl2ZXJ5IiwiZGVzYyIsInJhdGluZyIsInNob3BzQXZhbEF0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztBQUVBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVksWUFBakI7QUFDRTtBQUFBO0FBQUEsY0FBUyxTQUFTLEtBQUtDLFdBQXZCO0FBQ0csaUJBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkM7QUFEcEI7QUFERixTQURGO0FBTUUsaURBTkY7QUFPRTtBQUFBO0FBQUEsWUFBSyxXQUFZLG1CQUFqQjtBQUNFO0FBQUE7QUFBQSxjQUFTLFNBQVMsS0FBS0gsV0FBdkI7QUFDRyxpQkFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCRTtBQURwQjtBQURGLFNBUEY7QUFZRSxpREFaRjtBQWFFO0FBQUE7QUFBQSxZQUFLLFdBQVkscUJBQWpCO0FBQ0U7QUFBQTtBQUFBLGNBQVMsU0FBUyxLQUFLSixXQUF2QjtBQUNHLGlCQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJHO0FBRHBCO0FBREYsU0FiRjtBQWtCRSxpREFsQkY7QUFtQkU7QUFBQTtBQUFBLFlBQUssV0FBWSxrQkFBakI7QUFDRTtBQUFBO0FBQUEsY0FBUyxTQUFTLEtBQUtMLFdBQXZCO0FBQ0csaUJBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkk7QUFEcEI7QUFERixTQW5CRjtBQXdCRSxpREF4QkY7QUF5QkU7QUFBQTtBQUFBLFlBQUssV0FBWSxjQUFqQjtBQUNFO0FBQUE7QUFBQSxjQUFTLFNBQVMsS0FBS04sV0FBdkI7QUFDRyxpQkFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCSztBQURwQjtBQURGLFNBekJGO0FBOEJFLGlEQTlCRjtBQStCRTtBQUFBO0FBQUEsWUFBSyxXQUFZLGtCQUFqQjtBQUNFO0FBQUE7QUFBQSxjQUFTLFNBQVMsS0FBS1AsV0FBdkI7QUFDRyxpQkFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCTTtBQURwQjtBQURGLFNBL0JGO0FBb0NFLGlEQXBDRjtBQXFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBckNILE9BREY7QUF5Q0Q7Ozs7RUEzQ2dDQyxnQjs7a0JBQWRWLEsiLCJmaWxlIjoiSXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBTaW0gZnJvbSAnLi9TaW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbXMgZXh0ZW5kcyBDb21wb25lbnQgeyBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLXZpZXdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicHJpY2Utdmlld1wiPlxyXG4gICAgICAgICAgPHNlbGVjdCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLnByaWNlfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkZWxpdmVyeUNvc3Qtdmlld1wiPlxyXG4gICAgICAgICAgPHNlbGVjdCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLmRlbGl2ZXJ5Q29zdH1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZGF0ZU9mRGVsaXZlcnktdmlld1wiPlxyXG4gICAgICAgICAgPHNlbGVjdCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLmRhdGVPZkRlbGl2ZXJ5fVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvbi12aWV3XCI+XHJcbiAgICAgICAgICA8c2VsZWN0ICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMuZGVzY31cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicmF0aW5ncy12aWV3XCI+XHJcbiAgICAgICAgICA8c2VsZWN0ICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMucmF0aW5nfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzaG9wc0F2YWxBdC12aWV3XCI+XHJcbiAgICAgICAgICA8c2VsZWN0ICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMuc2hvcHNBdmFsQXR9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz4gXHJcbiAgICAgICAgIDxidXR0b24+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19