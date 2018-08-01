import React, { Component } from 'react';

//import components
import Leaf from './Leaf.js';


class Branch extends Component {

//call to the server to connect the data
  // componentDidMount(){
  //   fetch("http://localhost:5000/", {
  //       method: 'get'
  //       // mode: 'no-cors'
  //     })
  //       .then(resp=> resp.json())
  //       .then(resp=>console.log(resp))
  // }

  render() {
    return (
      <div className="branchContainer">
            <h2> Branch Name will go here </h2>
            <Leaf/>
      </div>
    );
  }
}

export default Branch;
