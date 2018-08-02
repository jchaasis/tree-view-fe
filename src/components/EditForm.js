import React, { Component } from 'react';


class EditForm extends Component {
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
            <button id='delete'> delete </button>
            <button id='cancel'> cancel </button>
        </div>
      </div>
    );
  }
}

export default EditForm;
