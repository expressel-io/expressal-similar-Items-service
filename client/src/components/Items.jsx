import React, { Component } from 'react'
// import $ from 'jquery';
import axios from 'axios';
// import Sim from './Sim';

export default class Items extends Component { 
  render() {
    return (
      <div className="items-view">
        <div className = "price-view">
          <p  onClick={this.handleClick}>
            {this.props.items.price}
          </p>
        </div>
        <div className = "deliveryCost-view">
          <p  onClick={this.handleClick}>
            {this.props.items.deliveryCost}
          </p>
        </div>
        <div className = "dateOfDelivery-view">
          <p  onClick={this.handleClick}>
            {this.props.items.dateOfDelivery}
          </p>
        </div>
        <br /> 
        <div className = "description-view">
          <p  onClick={this.handleClick}>
            {this.props.items.desc}
          </p>
        </div>
        <br /> 
        <div className = "ratings-view">
          <p  onClick={this.handleClick}>
            {this.props.items.rating}
          </p>
        </div>
        <br /> 
        <div className = "shopsAvalAt-view">
          <p  onClick={this.handleClick}>
            {this.props.items.shopsAvalAt}
          </p>
        </div>
        <br /> 
         <button>Add to Cart</button>
      </div>
    );
  }

}
