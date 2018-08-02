import React, { Component } from 'react';



class Leaf extends Component {
  render() {
    return (
      <div className="leafContainer">
            <h3> {this.props.num} </h3>
      </div>
    );
  }
}

export default Leaf;
