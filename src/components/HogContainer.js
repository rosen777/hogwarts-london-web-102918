import React, { Component } from 'react';
import Hog from './Hog'

class HogContainer extends Component {

  render() {
    console.log(this.props)

    return (

      <div className="container">
      {
      // this.props.allHogs.map(h => <Hog allHogs={h} />)
      }
      </div>
    )
  }
}

export default HogContainer;
