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
      test: 0,
      loaded: false,
    };

  }

  componentDidMount() {
    const { itemId } = this.state;
    console.log('start')
    const self = this;
    axios.get(`/api/products/${itemId}`)
      .then((response) => {
        self.setState({ test: response.data, loaded: true });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleNextClick() {
    console.log('clicked')
    const newCounter = this.state.counter;
    this.setState({ counter: newCounter+1 });
  }

  handleBackClick() {
    const newCounter = this.state.counter;
    this.setState({ counter: newCounter-1 });
  }

  render() {
    if (this.state.loaded) {
      var data = this.state.test
      var part1 = data.slice(0, 5);
      var part2 = data.slice(5, 10);
      var part3 = data.slice(10);
      console.log(part1, part2, part3)
    }
    if (this.state.loaded && this.state.counter === 0) {
      return (
        <div className="Items-productCard">
          <div className="Items-layoutColumn">
            <div className="App-title">
              Similar Items
            <Similar newItems={part1} />  
            </div>
          </div> 
          <a href="#" className="next" onClick={this.handleNextClick.bind(this)}>&raquo;</a>
        </div>
      );
    } else if (this.state.loaded && this.state.counter === 1 ) {
      return (
        <div className="Items-productCard">
          <a href="#" className="previous" onClick={this.handleBackClick.bind(this)}>&laquo;</a>
          <div className="Items-layoutColumn">
            <div className="App-title">
                Similar Items
                <Similar newItems={part2} />  

            </div>
          </div>         
          <a href="#" className="next"  onClick={this.handleNextClick.bind(this)}>&raquo;</a>
        </div>
      );  
    } else if (this.state.loaded && this.state.counter === 2) {
      return (
        <div className="Items-productCard">
          <a href="#" className="previous" onClick={this.handleBackClick.bind(this)}>&laquo;</a>
          <div className="Items-layoutColumn">
            <div className="App-title">
                Similar Items
                <Similar newItems={part3} />  
            </div>
          </div>  
        </div>
      ); 
    }
    return (
      <div></div>
    )
  }
}

/*

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
/*
 const { itemId } = this.state;
    console.log('start')
    const self = this;
    axios.get(`/api/products/${itemId}`)
      .then((response) => {
      self.setState({ test: response.data, loaded: true}, () => console.log(self.state.test))
      });
       
    this.handleClickAgain();


*/