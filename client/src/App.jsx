import React, { Component } from 'react';
import axios from 'axios';
import Sim from './components/Sim';
import './styles/Items.css';
import './styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }


  componentDidMount() {
    axios.get('/api/prods')
      .then((response) => {
        this.setState({ itemList: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="Items-productCard">
        <div className="Items-layoutColumn">
          <div className="App-product-carousel-container">
            <div className="App-product-carousel-column">
              <div className="App-title">
                Similar Items
                <Sim newItems={this.state.itemList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
