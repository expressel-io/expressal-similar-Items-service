'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/Items.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Items = function Items(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Items-product-info-container' },
    _react2.default.createElement(
      'p',
      { className: 'Items-column' },
      _react2.default.createElement('img', { src: props.item.img })
    ),
    _react2.default.createElement(
      'span',
      { className: 'Items-price-column' },
      props.item.price
    ),
    _react2.default.createElement(
      'span',
      { className: 'Items-subtitle' },
      props.item.deliveryCost
    ),
    _react2.default.createElement(
      'span',
      { className: 'Items-subtitle-days' },
      props.item.dateOfDelivery
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      { className: 'Items-product-title' },
      props.item.desc
    ),
    _react2.default.createElement(
      'p',
      { className: 'Items-review-Count' },
      _react2.default.createElement('span', { className: 'fa fa-star checked' }),
      _react2.default.createElement('span', { className: 'fa fa-star checked' }),
      _react2.default.createElement('span', { className: 'fa fa-star checked' }),
      _react2.default.createElement('span', { className: 'fa fa-star' }),
      _react2.default.createElement('span', { className: 'fa fa-star' }),
      props.item.rating
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'span',
      { className: 'merchantName' },
      props.item.shopsAvalAt
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'button',
      { className: 'ButtonStyling' },
      ' ADD TO CART '
    ),
    _react2.default.createElement('br', null)
  );
};

exports.default = Items;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9JdGVtcy5qc3giXSwibmFtZXMiOlsiSXRlbXMiLCJwcm9wcyIsIml0ZW0iLCJpbWciLCJwcmljZSIsImRlbGl2ZXJ5Q29zdCIsImRhdGVPZkRlbGl2ZXJ5IiwiZGVzYyIsInJhdGluZyIsInNob3BzQXZhbEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVUsOEJBQWY7QUFDRTtBQUFBO0FBQUEsUUFBRyxXQUFVLGNBQWI7QUFDRSw2Q0FBSyxLQUFLQSxNQUFNQyxJQUFOLENBQVdDLEdBQXJCO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFNLFdBQVUsb0JBQWhCO0FBQXNDRixZQUFNQyxJQUFOLENBQVdFO0FBQWpELEtBSkY7QUFLRTtBQUFBO0FBQUEsUUFBTSxXQUFVLGdCQUFoQjtBQUFrQ0gsWUFBTUMsSUFBTixDQUFXRztBQUE3QyxLQUxGO0FBTUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxxQkFBaEI7QUFBdUNKLFlBQU1DLElBQU4sQ0FBV0k7QUFBbEQsS0FORjtBQU9FLDZDQVBGO0FBUUU7QUFBQTtBQUFBLFFBQUcsV0FBVSxxQkFBYjtBQUFvQ0wsWUFBTUMsSUFBTixDQUFXSztBQUEvQyxLQVJGO0FBU0U7QUFBQTtBQUFBLFFBQUcsV0FBVSxvQkFBYjtBQUNFLDhDQUFNLFdBQVUsb0JBQWhCLEdBREY7QUFFRSw4Q0FBTSxXQUFVLG9CQUFoQixHQUZGO0FBR0UsOENBQU0sV0FBVSxvQkFBaEIsR0FIRjtBQUlFLDhDQUFNLFdBQVUsWUFBaEIsR0FKRjtBQUtFLDhDQUFNLFdBQVUsWUFBaEIsR0FMRjtBQU1HTixZQUFNQyxJQUFOLENBQVdNO0FBTmQsS0FURjtBQWlCRSw2Q0FqQkY7QUFrQkU7QUFBQTtBQUFBLFFBQU0sV0FBVSxjQUFoQjtBQUNHUCxZQUFNQyxJQUFOLENBQVdPO0FBRGQsS0FsQkY7QUFxQkUsNkNBckJGO0FBc0JFO0FBQUE7QUFBQSxRQUFRLFdBQVUsZUFBbEI7QUFBQTtBQUFBLEtBdEJGO0FBd0JFO0FBeEJGLEdBRFk7QUFBQSxDQUFkOztrQkE2QmVULEsiLCJmaWxlIjoiSXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvSXRlbXMuY3NzJztcblxuY29uc3QgSXRlbXMgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJJdGVtcy1wcm9kdWN0LWluZm8tY29udGFpbmVyXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwiSXRlbXMtY29sdW1uXCI+XG4gICAgICA8aW1nIHNyYz17cHJvcHMuaXRlbS5pbWd9IC8+XG4gICAgPC9wPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIkl0ZW1zLXByaWNlLWNvbHVtblwiPntwcm9wcy5pdGVtLnByaWNlfTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJJdGVtcy1zdWJ0aXRsZVwiPntwcm9wcy5pdGVtLmRlbGl2ZXJ5Q29zdH08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiSXRlbXMtc3VidGl0bGUtZGF5c1wiPntwcm9wcy5pdGVtLmRhdGVPZkRlbGl2ZXJ5fTwvc3Bhbj5cbiAgICA8YnIgLz5cbiAgICA8cCBjbGFzc05hbWU9XCJJdGVtcy1wcm9kdWN0LXRpdGxlXCI+e3Byb3BzLml0ZW0uZGVzY308L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiSXRlbXMtcmV2aWV3LUNvdW50XCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zdGFyIGNoZWNrZWRcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zdGFyIGNoZWNrZWRcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zdGFyIGNoZWNrZWRcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiPjwvc3Bhbj5cbiAgICAgIHtwcm9wcy5pdGVtLnJhdGluZ31cbiAgICA8L3A+XG4gICAgPGJyIC8+IFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lcmNoYW50TmFtZVwiPlxuICAgICAge3Byb3BzLml0ZW0uc2hvcHNBdmFsQXR9XG4gICAgPC9zcGFuPlxuICAgIDxiciAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQnV0dG9uU3R5bGluZ1wiPiBBREQgVE8gQ0FSVCA8L2J1dHRvbj5cbiAgICBcbiAgICA8YnIgLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtcztcbiJdfQ==