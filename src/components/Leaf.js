import React, { Component } from 'react';



class Leaf extends Component {
  render() {
    return (
      <div className="leafContainer">
        <div className='branchTitleContainer'>
            <hr className='twig'/>
            <p className='leafNum'> {this.props.num} </p>
        </div>
      </div>
    );
  }
}

export default Leaf;
