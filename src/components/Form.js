import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            name : null,
            children : null,
            min : null,
            max : null,
        }
    }
  render() {
    return (
      <div className="formContainer">
        <label> Name </label>
        <input type="text"/>
        <label> Children </label>
        <input type="number" max="15" min="0"/>
        <label> Min Range</label>
        <input type="number"/>
        <label> Max Range</label>
        <input type="number"/>
        <button> Add </button>
      </div>
    );
  }
}

export default Form;
