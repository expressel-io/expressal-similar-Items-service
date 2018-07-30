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
    const { itemId } = this.state;
    axios.get(`/api/products/${itemId}`)
      .then((response) => {
        this.setState({ itemList: response.data });
      })
      .catch((error) => {
        console.error(error);
      });   
  }

  handleClick() {
    console.log('clicked')
    const { itemId } = this.state;
    axios.get(`/api/products/next/${itemId}`)
    // axios.get('/api/products/')
      .then((response) => {
        console.log('resp', response.data);
        this.setState({ itemId: response.data[0].itemId})
        console.log('resp', response.data[0].itemId);
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
          <a href="#" className="next"  onClick={this.handleClick.bind(this)}>&raquo;</a>
      </div>
    );
  }
}
