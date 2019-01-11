import React, { Component } from 'react';

class Hog extends Component {

  state = {
      displayAdditionalInfo: false
  }
  renderAdditionalHogInfo =() =>{
    console.log(this.props.selectedHog)

  }

  render() {
    return (
      <div className="hog">


        <div className='hog-details pigTile maxPigTile' onClick={this.renderAdditionalHogInfo}>
          <h1>{this.props.selectedHog.name}</h1>
          <h2>{this.props.selectedHog.specialty}</h2>
          <img src={this.props.selectedHog.img_url} />
          <h4 className = "clickHog">{this.props.selectedHog["highest medal achieved"]}</h4>
        </div>



      </div>
    )
  }
}

export default Hog;
