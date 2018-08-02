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

    
    // this.setState({
    //   data: getBranchData()
    // });
    // let info = getBranchData();

    // console.log(info)
    // getBranchData((info)=> this.setState({
    //   data: info,
    // }));
  }


  render() {
    // getBranchData()
    let branches = this.state.data.length > 0 ? this.state.data.map( branch => <Branch key={branch.id} data={branch}/>): null;

    console.log(this.state.data);
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
          {branches}
         
        </div>
      </div>
    );
  }
}

export default App;
