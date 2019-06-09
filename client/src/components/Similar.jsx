import React, { Component } from 'react';
import axios from 'axios';
import Items from './Items.jsx';
import '../styles/App.css';
import '../styles/Items.css';

export default class Similar extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    //handle click to open page corresponding to item id
    //not sure whether this functionality is required now.
  }

  render() {
    const product = this.props.newItems.map((elem, index) => {
      return <Items key={index} item={elem} />;
    });
    return (
      <div className="Items-productCard">
        <div className="Items-layoutColumn">
          <div onClick={this.handleClick}>
            {product}
          </div>
        </div>
      </div>
    );
  }
}
