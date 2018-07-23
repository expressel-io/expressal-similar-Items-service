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
