import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  render() {
   
    console.log('hello');
    return (
      <div className="shopping-list">
        <h1>Shopping List </h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
 debugger;
export default App;
ReactDOM.render(<App />, document.getElementById('app'));