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

    //update the state with the appropriate form data
    addName(ev){
        this.setState({
            name: ev.target.value,
        })
    }
    addChildren(ev){
        this.setState({
            children: ev.target.value,
        })
    }
    addMin(ev){
        this.setState({
            min: ev.target.value,
        })
    }
    addMax(ev){
        this.setState({
            max: ev.target.value,
        })
    }
    //verify that all the fields have been completed then send the info to the backend
    sendData(){
        console.log(this.state)
    }

    render() {
        return (
        <div className="formContainer">
            <label> Name </label>
            <input type="text" onChange={ev=>this.addName(ev)}/>
            <label> Children </label>
            <input type="number" max="15" min="0" onChange={ev=>this.addChildren(ev)}/>
            <label> Min Range</label>
            <input type="number" onChange={ev=>this.addMin(ev)}/>
            <label> Max Range</label>
            <input type="number" onChange={ev=>this.addMax(ev)}/>
            <button onClick={()=>this.sendData()}> Add </button>
        </div>
        );
    }
}

export default Form;
