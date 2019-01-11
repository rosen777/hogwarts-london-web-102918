import React, { Component } from 'react';

export default class Hog extends Component {
  render() {
    return (
      <div className="hog">


        <p className='hog-details'>
          {this.props.selectedHog.name}
          {this.props.selectedHog.specialty}
          {this.props.selectedHog.greased}
        </p>



      </div>
    )
  }
}
