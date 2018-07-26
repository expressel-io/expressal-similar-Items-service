import React, { Component } from 'react';
import '../styles/Items.css';

export default class Items extends Component { 
  render() {
    return (
      <div className="Items-product-info-container">
        <p className="Items-column">
          <img src={this.props.items.img} />
        </p>
        <p className="Items-price-column">
          <p onClick={this.handleClick}>
            {this.props.items.price}
          </p>
        </p>
        <div className="Items-product-info-container">
          <p className="Items-subtitle">
            <p onClick={this.handleClick}>
              {this.props.items.deliveryCost}
            </p>
          </p>
        </div>
          <div className="Items-product-Info-container">
              <p className="Items-subtitle-days">
                <p onClick={this.handleClick}>
                  {this.props.items.dateOfDelivery}
                </p>
              </p>
          </div>
          <br /> 
          <div className="Items-product-title">
            <p onClick={this.handleClick}>
              {this.props.items.desc}
            </p>
          </div>
          <br /> 
          <div className="Items-review-Count">
            <p onClick={this.handleClick}>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              {this.props.items.rating}
            </p>
          </div>
          <br /> 
          <div className="merchantName">
              <p onClick={this.handleClick}>
                {this.props.items.shopsAvalAt}
              </p>
          </div>
          <br /> 
          <button className="ButtonStyling">ADD TO CART</button>
        </div>
    );
  }
}
