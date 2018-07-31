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
      newItemList: [],
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
    this.handleClickAgain();
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
        const newData = response.data;
        const newList = this.state.newItemList;
        this.setState({ itemList: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleClickAgain() {
     const { itemId } = this.state;
    axios.get(`/api/products/${itemId}`)
      .then((response) => {
        this.setState({ itemList: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

   handleFirstClick() {
    // const { itemId } = this.state;
    axios.get(`/api/products/1`)
      .then((response) => {
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
    } else if (this.state.counter ===1 ) {
      return (
        <div className="Items-productCard">
          <a href="#" className="previous" onClick={this.handleFirstClick.bind(this)}>&laquo;</a>
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
}

/*
  <a href="#" className="next"  onClick={this.handleClick.bind(this)}>&raquo;</a>
////////////////
else if (this.state.counter === 2) {
      return (
        <div className="Items-productCard">
          <a href="#" className="previous" onClick={this.handleClickAgain.bind(this)}>&laquo;</a>
          <div className="Items-layoutColumn">
            <div className="App-title">
                Similar Items
                <Similar newItems={this.state.itemList} />  
            </div>
          </div>  
        </div>
      ); 
    }
*/