import React, { Component } from 'react'
// import $ from 'jquery';
import axios from 'axios';
// import data from '../database/index.js';
import '../styles/Items.css';


export default class Items extends Component { 
  render() {
    // console.log(data.newProd.img);
    return (
      <div className="Items-productCard">
       <div className="Items-layoutColumn">  
          <div className="Items-product-info-container">
            <ul className = "Items-column">
              <img src={this.props.items.img} />
            </ul>
            <ul className = "Items-price-column">
              <p onClick={this.handleClick}>
                {this.props.items.price}
              </p>
            </ul>
            <div className = "Items-product-info-container">
              <ul className = "Items-subtitle">
                <p onClick={this.handleClick}>
                  {this.props.items.deliveryCost}
                </p>
              </ul>
            </div>
            <div className = "Items-product-Info-container">
              <ul className = "Items-subtitle-days">
                <p onClick={this.handleClick}>
                  {this.props.items.dateOfDelivery}
                </p>
              </ul>
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
      </div>
    );
  }

}
