import React, { Component } from 'react';

//import API goodies
import {deleteBranch, updateBranch} from '../api.js';
//import utility goodies
import {validateRange} from '../utility.js';
class EditForm extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: '',
            min: '',
            max: '',
            id: this.props.branch.id,
            children: this.props.branch.children,
            oldMin: this.props.branch.min,
            oldMax: this.props.branch.max// this is going to be used as a temporary fix to send the old min and max back. 
        }
    }

  //handle the deletion event
  handleDelete(){
    deleteBranch(this.props.branch.id);
    this.props.toggleEdit();
  }
  //handle the update event
  handleUpdate(){
    //shortened for use below
    let branch = this.state;
    let oldBranch = this.props.branch;
    console.log(oldBranch)
 
    //validate the min and max ranges are acceptable
    if(branch.min !== '' && branch.max !== ''){
        if(validateRange(branch.min, branch.max) === false){
            alert('Ruh Roh! Please check to make sure your min and max values are valid and try again.')
            return;
         } 
    } 
    //If just the min is being changed, make sure it is still lower than the current max.
    if(branch.min !== '' && branch.max === ''){
       
        if(validateRange(branch.min, oldBranch.max) === false){
            alert('Ruh Roh! Please check to make sure your new min is less than your max, or add a new max.')
            return;
         } 
    }
    //if just the max is being changed, make sure it is still higher than your min
    if(branch.min === '' && branch.max !== ''){
        if(validateRange(oldBranch.min, branch.max) === false){
            alert('Ruh Roh! Please check to make sure your new max is greater than your min, or add a new min.')
            return;
         } 
    }

      updateBranch(branch);
      this.props.toggleEdit();
  }
  //handle the form updates
  handleName(ev){
    this.setState({
        name: ev.target.value
    })
  }

  //handle updates to the range
  handleMin(ev){
      this.setState({
          min: ev.target.value
      });
  }
  handleMax(ev){
    this.setState({
        max: ev.target.value
    });
  }

  render() {
    return (
      <div className="editForm">
        <div className='inputContainer'>
            <label> new name </label>
            <input type='text' className="nameInput" placeholder='optional' onChange={ev=>this.handleName(ev)}/>
        </div>
        <div className='inputContainer'>
            <label> new min </label>
            <input className='numberInput' type='number' placeholder='optional' min='0' onChange={(ev)=>this.handleMin(ev)}/>
        </div>
        <div className='inputContainer'>
            <label> new max </label>
            <input className='numberInput' type='number' placeholder='optional' onChange={(ev)=>this.handleMax(ev)}/>
        </div>
        <div className='buttons'>
            <button className='update' onClick={()=>this.handleUpdate()}> update </button>
            <button className='delete' onClick={()=>this.handleDelete()}> delete </button>
            <button className='cancel' onClick={()=>this.props.toggleEdit()}> cancel </button>
        </div>
      </div>
    );
  }
}

export default EditForm;
