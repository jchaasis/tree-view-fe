import React, { Component } from 'react';

//import API goodies
import {deleteBranch} from '../api.js';
class EditForm extends Component {

  //handle the deletion event
  handleDelete(){
    console.log(this.props.branchId)
    deleteBranch(this.props.branchId);
  }

  render() {
    return (
      <div className="editForm">
        <div>
            <label> name</label>
            <input type='text'/>
        </div>
        <div>
        <label> new min </label>
        <input className='numberInput' type='number'/>
        </div>
        <div>
        <label> new max </label>
        <input className='numberInput' type='number' />
        </div>
        <div className='buttons'>
            <button id='update'> update </button>
            <button id='delete' onClick={()=>this.handleDelete()}> delete </button>
            <button id='cancel'> cancel </button>
        </div>
      </div>
    );
  }
}

export default EditForm;
