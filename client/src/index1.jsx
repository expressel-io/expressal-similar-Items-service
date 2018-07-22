import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

export default class Sim extends Component {  
  constructor(props, context) {
    super(props, context)
    this.state = {
      itemList: [],
      lowLimit: 0,
      highLimit: 5
    } 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newlowLimit = this.state.lowLimit + 5;
    let newhighLimit = this.state.highLimit + 5;
    this.setState({ lowLimit : newlowLimit });
    this.setState({ highLimit : newhighLimit });
  }

  render() {
    return (
      <div className="images-view">
        <select  onClick={this.handleClick}>
          {this.state.itemList.map((elem, index, limit) => {
              if ( lowLimit < index < = highLimit ) {
                return <select key={index} value={elem.img}>{elem.img}</select>;
              }
          })}
        </select>
      </div>
    ) 
  }
}

