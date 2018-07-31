import React, { Component } from 'react';
import axios from 'axios';
import Similar from './components/Similar';
import './styles/Items.css';
import './styles/App.css';

export default class SimilarItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      itemId: 1,
    };
  }


  componentDidMount() {
    // axios.get('/api/products')
    //   .then((response) => {
    //     this.setState({ itemList: response.data });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    const { itemId } = this.state;
    axios.get(`/api/products/${itemId}`)
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
          <div className="App-title">
              Similar Items
              <Similar newItems={this.state.itemList} />
          </div>
        </div>
      </div>
    );
  }
}
