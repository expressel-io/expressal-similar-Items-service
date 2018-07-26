import React, { Component } from 'react';
import Sim from './components/Sim.jsx';
import Items from './components/Items.jsx';
import axios from 'axios';
// import Data from '../database/index.js';
import './styles/Items.css';
import './styles/app.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemList: [],
    }  
  }


  componentWillMount() {
    let self = this;
    axios.get('/api/prods')
      .then(function(response) {
        console.log('response is', response.data);
        self.setState({ itemList: response.data });
        })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Items-productCard">
        <div className="Items-layoutColumn">
          <div className="App-product-carousel-container">
            <div className="App-product-carousel-column">
              <div className="App-title">
                <div className="Items-flex-container">
                  Similar Items
                  <Sim newItems={this.state.itemList} />
                  <Items items={this.state.itemList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}