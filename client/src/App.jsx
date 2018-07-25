import React, { Component } from 'react';
import Sim from './components/Sim.jsx';
import Items from './components/Items.jsx';
import axios from 'axios';
// import Data from '../database/index.js';
import './styles/GeneralStyles.css';
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
    console.log('i am here');
    axios.get('/api/prods')
      .then(function(response) {
        console.log('response is', response.data);
        self.setState({ itemList: response.data });
        self.setState({ id: response.data.id });

      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App-product-carousel-container">
        <div className="App-product-carousel-column">
          <div className="App-title">
            Similar Items

            <Sim newItems={this.state.itemList} />
            <Items items={this.state.itemList} />

          </div>
        </div>
      </div>
    );
  }

}