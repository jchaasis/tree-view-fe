import React, { Component } from 'react';

//import components
import Leaf from './Leaf.js';

class Branch extends Component {
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
