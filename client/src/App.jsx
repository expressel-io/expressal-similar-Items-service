import React, { Component } from 'react';
import Sim from './components/Sim.jsx';
import Items from './components/Items.jsx';
import axios from 'axios';
// import Data from '../database/index.js';
// import './App.css';

export default class App extends Component {  
  constructor(props) {
  super(props)
    this.state = {
      itemList: [],
    } 
  }


  componentWillMount () {
    var self = this;
    axios.get('/api/items')
      .then(function (response) {
        console.log('response is', response);
        self.setState({itemList : response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="product-carousel-container">
        <div className="product-carousel-column">
          <div className="title">
            Similar Items

            <Sim newItems={this.state.itemList}/>
            <Items items={this.state.itemList}/>

          </div>
        </div>
      </div>
    ); 
  }

}




