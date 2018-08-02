import React, { Component } from 'react';

//import API goodies
import {deleteBranch, updateBranch} from '../api.js';
class EditForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            min: '',
            max: '',
            id: this.props.branchId,
        }
    }

  //handle the deletion event
  handleDelete(){
    deleteBranch(this.props.branchId);
    this.props.toggleEdit();
  }
  //handle the update event
  handleUpdate(){
      updateBranch(this.state);
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
        <div>
            <label> name</label>
            <input type='text' onChange={ev=>this.handleName(ev)}/>
        </div>
        <div>
            <label> new min </label>
            <input className='numberInput' type='number' min='0' onChange={(ev)=>this.handleMin(ev)}/>
        </div>
        <div>
            <label> new max </label>
            <input className='numberInput' type='number' onChange={(ev)=>this.handleMax(ev)}/>
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
