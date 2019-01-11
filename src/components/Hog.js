import React, { Component } from 'react';

export default class Hog extends Component {
  render() {
    return (
      <div className="hog">
        // <Hog />
        <p className='hog-details'>
          {this.props.allHogs}
        </p>
      </div>
    )
  }
}
