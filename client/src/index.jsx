import React from 'react';
import ReactDOM from 'react-dom';
 import axios from 'axios';
import $ from 'jquery';
import Sim from './components/Sim.jsx';
import Items from './components/Items.jsx';


class App extends React.Component {
  render() {
   
    
    return (
      <div className="shopping-list">
        Similar items
        <Sim/>
        <Items/>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));