import React, { Component } from 'react';
import './App.css';


//import components
import Branch from './components/Branch.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tree View</h1>
        </header>
        <div id="rootLabel">
          <h1> Root </h1>
          <Branch/>
        </div>
      </div>
    );
  }
}

export default App;
