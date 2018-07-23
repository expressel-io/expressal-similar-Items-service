import React, { Component } from 'react'
// import $ from 'jquery';
import axios from 'axios';
// import Sim from './Sim';

export default class Items extends Component { 
  render() {
    return (
      <div className="items-view">
        <div className = "price-view">
          <select  onClick={this.handleClick}>
            {this.props.items.price}
          </select>
        </div>
        <br /> 
        <div className = "deliveryCost-view">
          <select  onClick={this.handleClick}>
            {this.props.items.deliveryCost}
          </select>
        </div>
        <br /> 
        <div className = "dateOfDelivery-view">
          <select  onClick={this.handleClick}>
            {this.props.items.dateOfDelivery}
          </select>
        </div>
        <br /> 
        <div className = "description-view">
          <select  onClick={this.handleClick}>
            {this.props.items.desc}
          </select>
        </div>
        <br /> 
        <div className = "ratings-view">
          <select  onClick={this.handleClick}>
            {this.props.items.rating}
          </select>
        </div>
        <br /> 
        <div className = "shopsAvalAt-view">
          <select  onClick={this.handleClick}>
            {this.props.items.shopsAvalAt}
          </select>
        </div>
        <br /> 
         <button>Add to Cart</button>
      </div>
    );
  }

}
