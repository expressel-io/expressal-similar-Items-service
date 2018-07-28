import React, { Component } from 'react';
import axios from 'axios';
import Items from './Items.jsx';
import '../styles/App.css';
import '../styles/Items.css';

export default class Sim extends Component { 
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   lowLimit: 0,
    //   highLimit: 4,
    // };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    
  }

  render() {
    const product = this.props.newItems.map((elem, index) => {
      // if (this.state.lowLimit < index < this.state.highLimit) {
        return <Items key={index} item={elem} />;
      // }
    });
    return (
      <div className="Items-productCard">
        <div className="Items-layoutColumn">
          <div onClick={this.handleClick}>
            {product}
            <a href="#" className="next">&raquo;</a> 
          </div>
        </div>
      </div>
    );
  }
}
