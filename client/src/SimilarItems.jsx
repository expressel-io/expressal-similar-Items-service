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
      counter: 0,
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
      .then((response) => {
        this.setState({ itemId: response.data[0].itemId});
        const newCounter = this.state.counter;
        this.setState({ counter: newCounter+1 });
        console.log('count', newCounter+1);
        this.setState({ itemList: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleClickAgain() {
    console.log('clicked');
    const { itemId } = this.state;
    axios.get(`/api/products/previous/${itemId}`)
      .then((response) => {
        this.setState({ itemId: response.data[0].itemId});
        const newCounter = this.state.counter;
        this.setState({ counter: newCounter-1 });
        console.log('count', newCounter-1);
        this.setState({ itemList: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.counter === 0) {
      return (
        <div className="Items-productCard">
          <div className="Items-layoutColumn">
            <div className="App-title">
              Similar Items
            <Similar newItems={this.state.itemList} />  
            </div>
          </div> 
          <a href="#" className="next" onClick={this.handleClick.bind(this)}>&raquo;</a>
        </div>
      );
    } else {
      return (
        <div className="Items-productCard">
          <a href="#" class="previous" onClick={this.handleClickAgain.bind(this)}>&laquo;</a>
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
}
