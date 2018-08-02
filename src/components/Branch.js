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
    let leaves = this.props.data.leaves.map((leaf)=><Leaf key={leaf.id }num={leaf.leafNumber} />)
    return (
      <div className="branchContainer">
            <h2> {this.props.data.name} </h2>
            {leaves}
      </div>
    );
  }
}

export default Branch;
