import React, { Component } from 'react';

//import components
import Leaf from './Leaf.js';

class Branch extends Component {
  constructor(props){
    super(props)

    this.state = {
      hovered: false
    }
  }
//when a user hovers over

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
      <div className='branchContainer'>
        <div className='branchTitleContainer'>
          <hr className='twig'/>
          <h4 className='branchTitle'> {this.props.data.name} </h4>
          <h5 className='branchRange'> {this.props.data.min_range} : {this.props.data.max_range}</h5>
        </div>
          {leaves}
      </div>
    );
  }
}

export default Branch;
