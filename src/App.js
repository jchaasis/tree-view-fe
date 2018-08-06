import React, { Component } from 'react';
import './App.css';

//import components
import Branch from './components/Branch.js';
import Form from './components/Form.js';
import Requirements from './components/Requirements.js'

//import api
import { getBranchData, throwError } from './api';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      add: false,
      reqs: false,
    }
  }

  componentDidMount(){
    getBranchData((details)=> this.setState({
      data: details.Branches
    }));
    //listen for errors
    throwError()
  }

  //toggle the add branch form
  toggleAddForm(){
    this.setState({
      add: !this.state.add,
    })
  }
  //toggle the visibility of the requirements list
  toggleReqs(){
    this.setState({
      reqs: !this.state.reqs,
    })
  }

  render() {
    // display the branch information if it is available
    let branches = this.state.data.length > 0 ? this.state.data.map( branch => <Branch key={branch.id} data={branch}/>): null;
    // display the add branch form when the add button has been selected
    let add = this.state.add === true ? <Form toggleAdd={()=>this.toggleAddForm()}/> : <button className="update" onClick={()=> this.toggleAddForm()}> + </button>;

    //display the branch requirements guidelines when a user hovers over the question mark.
    let requirements = this.state.reqs === false ? null : <Requirements />;
    return (
      <div className="App">
        <header className="App-header">
        <div className="carsContainer">
          <div role='img' className="vehicle"> &#128661; </div>
          <div role='img' className="vehicle"> &#128663; </div>
          <div role='img' className="vehicle"> &#128652; </div>
          <div role='img' className="vehicle"> &#128665; </div>
          <div role='img' className="vehicle"> &#128666; </div>
          <div role='img' className="vehicle"> &#128663; </div>
        </div>
          <h1 className="App-title topHalf">treensportation</h1>
          <hr id="dashes"/>
          <h1 className="App-title bottomHalf">live-updating node tree</h1>
        <div className="carsContainer bottomCars">
          <div role='img' className="vehicle bottomVehic"> &#128661; </div>
          <div role='img' className="vehicle bottomVehic"> &#128663; </div>
          <div role='img' className="vehicle bottomVehic"> &#128652; </div>
          <div role='img' className="vehicle bottomVehic"> &#128665; </div>
          <div role='img' className="vehicle bottomVehic"> &#128666; </div>
          <div role='img' className="vehicle bottomVehic"> &#128663; </div>
        </div>
        </header>
        <div>
          <div className="rootContainer">
            <h1 id="rootLabel"> root </h1>
            <button id="reqsButton" onClick={()=> this.toggleReqs()}> ? </button>
            {requirements}
            {add}
          </div>
          {branches}
        </div>
      </div>
    );
  }
}

export default App;
