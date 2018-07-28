import React, { Component } from 'react';
import '../styles/Items.css';

const Items = (props) => ( 
  <div className="Items-product-info-container">
    <p className="Items-column">
      <img src={props.item.img} />
    </p>
    <span className="Items-price-column">{props.item.price}</span>
    <span className="Items-subtitle">{props.item.deliveryCost}</span>
    <span className="Items-subtitle-days">{props.item.dateOfDelivery}</span>
    <br />
    <p className="Items-product-title">{props.item.desc}</p>
    <p className="Items-review-Count">
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star"></span>
    <span className="fa fa-star"></span>
      {props.item.rating}
    </p>
    <br /> 
    <span className="merchantName">
      {props.item.shopsAvalAt}
    </span>
    <br />
    <button className="ButtonStyling"> ADD TO CART </button>
    <br />
  </div>
);

export default Items;
