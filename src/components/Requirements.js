import React, { Component } from 'react';

class Requirements extends Component {
    
  render() {
    return (
    <div id='reqsModal'>
      <div className='reqsContainer'>
        <ul className='requirements'>
          <li><p> the branch name must be between 3 and 15 chracters in length and contain only letters and numbers</p></li>
          <li><p>the number of children must be between 0 and 15</p></li>
          <li><p>the minimum range value must be less than the max range value</p></li>
        </ul>
      </div>
      <div id='reqsTriangle'>
      </div>
    </div>
    );
  }
}

export default Requirements;
