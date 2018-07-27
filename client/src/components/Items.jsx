import React, { Component } from 'react';
import '../styles/Items.css';

export default class Items extends Component { 
  render() {
    return (
      <div className="Items-product-info-container">
        <p className="Items-column">
          <img src={this.props.items.img} />
        </p>
        <span className="Items-price-column">{this.props.items.price}</span>
        <span className="Items-subtitle">{this.props.items.deliveryCost}</span>
        <span className="Items-subtitle-days">{this.props.items.dateOfDelivery}</span>
        <br />
        <p className="Items-product-title">{this.props.items.desc}</p>
        <p className="Items-review-Count" onClick={this.handleClick}>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
          {this.props.items.rating}
        </p>
        <br /> 
        <span className="merchantName" onClick={this.handleClick}>
        {this.props.items.shopsAvalAt}
        </span>
        <br />
        <br />
        <button className="ButtonStyling"> ADD TO CART </button>
      </div>
    );
  }
}
