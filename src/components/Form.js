import React, { Component } from 'react';

//import api goodies
import {addBranch } from '../api.js';
//import utility goodies
import {validateRange, validateName, validateChildren} from '../utility.js';

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
        //shortened for use below
        let f = this.state;
        //we will also perform some validation on the backend. Perform some initials validation steps just for fun.
        //make sure the numbers for the range are acceptable, meaning, the min is less than the max. 
        if(validateRange(f.min, f.max) === false){
            alert('Ruh Roh! Please check to make sure your min is less than your max')
            return;
         } 
         //validate the length of the name
         if(validateName(f.name) === false) {
             alert('Ruh Roh! Please check that your name is between 3 and 15 characters.')
             return;
         }
         //make sure the value for the children is acceptable
         if(validateChildren(f.children) === false) {
             alert('Ruh Roh! Please check that your children value is between 0 and 15.')
             return;
         }
        //If we have made it to this point and all fields are complete, send the branch info to the backend
        if (f.name !== null &&
            f.children !== null &&
            f.min !== null &&
            f.max !== null){
            //send data to the backend
            addBranch(this.state)
        } else {
            alert('Please complete all fields before branch addition');
        }
        //remove the add form
        this.props.toggleAdd();
    }

    render() {
        return (
        <div className="addFormContainer">
            <div className='inputContainer'>
                <label> name </label>
                <input className="nameInput" type="text" maxLength="15" onChange={ev=>this.addName(ev)}/>
            </div>
            <div className='inputContainer'>
                <label> children </label>
                <input className='numberInput' maxLength="2" type="number" max="15" min="0" onChange={ev=>this.addChildren(ev)}/>
            </div>
            <div className='inputContainer'>
                <label> min range </label>
                <input className='numberInput' type="number" maxLength="10" onChange={ev=>this.addMin(ev)}/>
            </div>
            <div className='inputContainer'>
                <label> max range </label>
                <input className='numberInput' type="number" maxLength="10" onChange={ev=>this.addMax(ev)}/>
            </div>
            <div className='buttonContainer'>
                <button className='update' onClick={()=>this.sendData()}> add </button>
                <button className='cancel' onClick={()=> this.props.toggleAdd()}> cancel </button>
            </div>
        </div>
        );
    }
}

export default Form;
