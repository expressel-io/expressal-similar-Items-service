import React, { Component } from 'react'
// import $ from 'jquery';
import axios from 'axios';
import '../styles/Items.css';

export default class Items extends Component { 
  render() {
    return (
      <div className="Items-productCard"> 
        <div className="Items-product-info-container">
          <div className = "Items-price-column">
            <p onClick={this.handleClick}>
              {this.props.items.price}
            </p>
          </div>
          <div className = "Items-product-info-container">
            <div className = "Items-subtitle">
              <p onClick={this.handleClick}>
                {this.props.items.deliveryCost}
              </p>
            </div>
          </div>
          <div className = "Items-product-Info-container">
            <div className = "Items-subtitle-days">
              <p onClick={this.handleClick}>
                {this.props.items.dateOfDelivery}
              </p>
            </div>
          </div>
          <br /> 
          <div className = "Items-product-title">
            <p onClick={this.handleClick}>
              {this.props.items.desc}
            </p>
          </div>
          <br /> 
          <div className = "Items-review-Count">
            <p  onClick={this.handleClick}>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              {this.props.items.rating}
            </p>
          </div>
          <br /> 
          <div className = "merchantName">
            <p  onClick={this.handleClick}>
              {this.props.items.shopsAvalAt}
            </p>
          </div>
          <br /> 
           <button className="ButtonStyling">ADD TO CART</button>
        </div>
      </div>
    );
  }

}
