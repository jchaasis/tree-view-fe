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

    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    getBranchData((details)=> this.setState({
      data: details.Branches
    }));
  }

  render() {
    // getBranchData()
    let branches = this.state.data.length > 0 ? this.state.data.map( branch => <Branch key={branch.id} data={branch}/>): null;

    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title topHalf">Live-Updating</h1>
          <hr id="dashes"/>
          <h1 className="App-title bottomHalf">Tree View</h1>
        </header>
        <div>
          <Form/>
          <h1 id="rootLabel"> Root </h1>
          {branches}
        </div>
      </div>
    );
  }
}

export default App;
