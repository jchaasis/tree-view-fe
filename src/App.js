import React, { Component } from 'react';
import './App.css';

//import components
import Branch from './components/Branch.js';
import Form from './components/Form.js';

//import api
import { getBranchData } from './api';



class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    getBranchData()
  }


  render() {
    // getBranchData()
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title topHalf">Live Action</h1>
          <hr id="dashes"/>
          <h1 className="App-title bottomHalf">Tree View</h1>
        </header>
        <div>
          <h1 id="rootLabel"> Root </h1>
          <Form/>
          <Branch/>
        </div>
      </div>
    );
  }
}

export default App;
