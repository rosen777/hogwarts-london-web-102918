import React, { Component } from 'react';
import Hog from './Hog'

export default class HogContainer extends Component {
  render() {
    return (
      <div className="container">
      {
      this.props.allHogs.map(h => <Hog allHogs={h} />)
      }
      </div>
    )
  }
}
