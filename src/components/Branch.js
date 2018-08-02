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
    let leaves = this.props.data.leaves.map((leaf)=><Leaf key={leaf.id }num={leaf.leafNumber} />)

    let editForm = this.state.edit === true ? <EditForm /> : null;
    return (
      <div className='branchContainer'>
        <div className='branchTitleContainer'>
          <hr className='twig'/>
          <h4 className='branchTitle'> {this.props.data.name} </h4>
          <button className='editButton' onClick={()=> this.toggleEdit()}> edit </button>
          {editForm}
          <h5 className='branchRange'> {this.props.data.min_range} : {this.props.data.max_range}</h5>
        </div>
          {leaves}
      </div>
    );
  }
}

export default Branch;
