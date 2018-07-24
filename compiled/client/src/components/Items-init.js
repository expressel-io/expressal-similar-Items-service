// import React, { Component } from 'react'
// // import $ from 'jquery';
// import axios from 'axios';

// export default class Items extends Component { 
//   constructor(props, context) {
//     super(props, context)
//     this.state = {
//       itemList: [],
//       lowLimit: 0,
//       highLimit: 5
//     } 
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentWillMount () {
//     this.handleClick();
//     var self = this;
//     axios.get('/items')
//       .then(function (response) {
//         self.setState({itemList : response.data})
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//   }


//   handleClick() {
//     let newlowLimit = this.state.lowLimit + 5;
//     let newhighLimit = this.state.highLimit + 5;
//     this.setState({ lowLimit : newlowLimit });
//     this.setState({ highLimit : newhighLimit });

//   }

//   render() {
//     return (
//       <div className="items-view">
//         <div className = "price-view">
//           <select  onClick={this.handleClick}>

//             {props.itemList.map((elem, index, limit ) => {
//                 if ( lowLimit < index <= highLimit ) {
//                   return <select key={index} value={elem.price}>{elem.price}</select>;
//                 }
//             })}
//           </select>
//         </div>
//         <div className = "deliveryCost-view">
//           <select  onClick={this.handleClick}>
//             {props.itemList.map((elem, index, limit ) => {
//                 if ( lowLimit < index <= highLimit ) {
//                   return <select key={index} value={elem.deliveryCost}>{elem.deliveryCost}</select>;
//                 }
//             })}
//           </select>
//         </div>
//         <div className = "dateOfDelivery-view">
//           <select  onClick={this.handleClick}>
//             {props.itemList.map((elem, index, limit ) => {
//                 if ( lowLimit < index <= highLimit ) {
//                   return <select key={index} value={elem.dateOfDelivery}>{elem.dateOfDelivery}</select>;
//                 }
//             })}
//           </select>
//         </div>
//         <div className = "description-view">
//           <select  onClick={this.handleClick}>
//             {props.itemList.map((elem, index, limit ) => {
//                 if ( lowLimit < index <= highLimit ) {
//                   return <select key={index} value={elem.description}>{elem.desc}</select>;
//                 }
//             })}
//           </select>
//         </div>
//         <div className = "ratings-view">
//           <select  onClick={this.handleClick}>
//             {props.itemList.map((elem, index, limit ) => {
//                 if ( lowLimit < index <= highLimit ) {
//                   return <select key={index} value={elem.rating}>{elem.rating}</select>;
//                 }
//             })}
//           </select>
//         </div>
//         <div className = "shopsAvalAt-view">
//           <select  onClick={this.handleClick}>
//             {props.itemList.map((elem, index, limit ) => {
//                 if ( lowLimit < index <= highLimit ) {
//                   return <select key={index} value={elem.shopsAvalAt}>{elem.shopsAvalAt}</select>;
//                 }
//             })}
//           </select>
//         </div>
//          <button>Add to Cart</button>
//       </div>
//     );
//   }

// }
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9JdGVtcy1pbml0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ikl0ZW1zLWluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbi8vIC8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7IFxyXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XHJcbi8vICAgICBzdXBlcihwcm9wcywgY29udGV4dClcclxuLy8gICAgIHRoaXMuc3RhdGUgPSB7XHJcbi8vICAgICAgIGl0ZW1MaXN0OiBbXSxcclxuLy8gICAgICAgbG93TGltaXQ6IDAsXHJcbi8vICAgICAgIGhpZ2hMaW1pdDogNVxyXG4vLyAgICAgfSBcclxuLy8gICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XHJcbi8vICAgICB0aGlzLmhhbmRsZUNsaWNrKCk7XHJcbi8vICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbi8vICAgICBheGlvcy5nZXQoJy9pdGVtcycpXHJcbi8vICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2l0ZW1MaXN0IDogcmVzcG9uc2UuZGF0YX0pXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgICAgIH0pO1xyXG5cclxuLy8gICB9XHJcblxyXG5cclxuLy8gICBoYW5kbGVDbGljaygpIHtcclxuLy8gICAgIGxldCBuZXdsb3dMaW1pdCA9IHRoaXMuc3RhdGUubG93TGltaXQgKyA1O1xyXG4vLyAgICAgbGV0IG5ld2hpZ2hMaW1pdCA9IHRoaXMuc3RhdGUuaGlnaExpbWl0ICsgNTtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBsb3dMaW1pdCA6IG5ld2xvd0xpbWl0IH0pO1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZ2hMaW1pdCA6IG5ld2hpZ2hMaW1pdCB9KTtcclxuXHJcbi8vICAgfVxyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLXZpZXdcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicHJpY2Utdmlld1wiPlxyXG4vLyAgICAgICAgICAgPHNlbGVjdCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcblxyXG4vLyAgICAgICAgICAgICB7cHJvcHMuaXRlbUxpc3QubWFwKChlbGVtLCBpbmRleCwgbGltaXQgKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGxvd0xpbWl0IDwgaW5kZXggPD0gaGlnaExpbWl0ICkge1xyXG4vLyAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNlbGVjdCBrZXk9e2luZGV4fSB2YWx1ZT17ZWxlbS5wcmljZX0+e2VsZW0ucHJpY2V9PC9zZWxlY3Q+O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkZWxpdmVyeUNvc3Qtdmlld1wiPlxyXG4vLyAgICAgICAgICAgPHNlbGVjdCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbi8vICAgICAgICAgICAgIHtwcm9wcy5pdGVtTGlzdC5tYXAoKGVsZW0sIGluZGV4LCBsaW1pdCApID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggbG93TGltaXQgPCBpbmRleCA8PSBoaWdoTGltaXQgKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgIHJldHVybiA8c2VsZWN0IGtleT17aW5kZXh9IHZhbHVlPXtlbGVtLmRlbGl2ZXJ5Q29zdH0+e2VsZW0uZGVsaXZlcnlDb3N0fTwvc2VsZWN0PjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZGF0ZU9mRGVsaXZlcnktdmlld1wiPlxyXG4vLyAgICAgICAgICAgPHNlbGVjdCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbi8vICAgICAgICAgICAgIHtwcm9wcy5pdGVtTGlzdC5tYXAoKGVsZW0sIGluZGV4LCBsaW1pdCApID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggbG93TGltaXQgPCBpbmRleCA8PSBoaWdoTGltaXQgKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgIHJldHVybiA8c2VsZWN0IGtleT17aW5kZXh9IHZhbHVlPXtlbGVtLmRhdGVPZkRlbGl2ZXJ5fT57ZWxlbS5kYXRlT2ZEZWxpdmVyeX08L3NlbGVjdD47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uLXZpZXdcIj5cclxuLy8gICAgICAgICAgIDxzZWxlY3QgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4vLyAgICAgICAgICAgICB7cHJvcHMuaXRlbUxpc3QubWFwKChlbGVtLCBpbmRleCwgbGltaXQgKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGxvd0xpbWl0IDwgaW5kZXggPD0gaGlnaExpbWl0ICkge1xyXG4vLyAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNlbGVjdCBrZXk9e2luZGV4fSB2YWx1ZT17ZWxlbS5kZXNjcmlwdGlvbn0+e2VsZW0uZGVzY308L3NlbGVjdD47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJhdGluZ3Mtdmlld1wiPlxyXG4vLyAgICAgICAgICAgPHNlbGVjdCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbi8vICAgICAgICAgICAgIHtwcm9wcy5pdGVtTGlzdC5tYXAoKGVsZW0sIGluZGV4LCBsaW1pdCApID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggbG93TGltaXQgPCBpbmRleCA8PSBoaWdoTGltaXQgKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgIHJldHVybiA8c2VsZWN0IGtleT17aW5kZXh9IHZhbHVlPXtlbGVtLnJhdGluZ30+e2VsZW0ucmF0aW5nfTwvc2VsZWN0PjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic2hvcHNBdmFsQXQtdmlld1wiPlxyXG4vLyAgICAgICAgICAgPHNlbGVjdCAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbi8vICAgICAgICAgICAgIHtwcm9wcy5pdGVtTGlzdC5tYXAoKGVsZW0sIGluZGV4LCBsaW1pdCApID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggbG93TGltaXQgPCBpbmRleCA8PSBoaWdoTGltaXQgKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgIHJldHVybiA8c2VsZWN0IGtleT17aW5kZXh9IHZhbHVlPXtlbGVtLnNob3BzQXZhbEF0fT57ZWxlbS5zaG9wc0F2YWxBdH08L3NlbGVjdD47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgIDxidXR0b24+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuIl19