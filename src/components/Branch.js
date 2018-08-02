import React, { Component } from 'react';

//import components
import Leaf from './Leaf.js';
import EditForm from './EditForm.js';

class Branch extends Component {
  constructor(props){
    super(props)

    this.state = {
      edit: true,
    }
  }
//toggle the edit form when the edit button is clicked
toggleEdit(){
  this.setState({
    edit: !this.state.edit
  })
}

  render() {
    //iterate through the branch's leaves and create a leaf for each number
    let leaves = this.props.data.leaves.map((leaf)=><Leaf key={leaf.id }num={leaf.leafNumber} />)
    //display either the edit form or the edit button, but not both. Determine which to display based off of the edit state.
    let editForm = this.state.edit === true ? <EditForm branchId={this.props.data.id} toggleEdit={()=> this.toggleEdit()}/> : <button className='editButton cancel' onClick={()=> this.toggleEdit()}> edit </button>;

    return (
      <div className='branchContainer'>
        <div className='branchTitleContainer'>
          <hr className='twig'/>
          <h4 className='branchTitle'> {this.props.data.name} </h4>
          {editForm}
          <h5 className='branchRange'> {this.props.data.min_range} : {this.props.data.max_range}</h5>
        </div>
          {leaves}
      </div>
    );
  }
}

export default Branch;
