import React, { Component } from 'react';

class Hog extends Component {

  state = {
    medal: " ",
    weight: " ",
    specialty: " "
  }

  renderAdditionalHogInfo =() =>{
      this.setState({
        medal: this.props.selectedHog["highest medal achieved"],
        weight: this.props.selectedHog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"],
        specialty: this.props.selectedHog.specialty
      })
  }

  render() {
    return (
      <div className="hog">


        <div className='hog-details pigTile maxPigTile' onClick={this.renderAdditionalHogInfo}>
          <h1>{this.props.selectedHog.name}</h1>
          <img src={process.env.PUBLIC_URL + '/hog-imgs/' + this.props.selectedHog.name.replace(' ', '_').toLowerCase() + '.jpg'} />
          <h4>{this.state.medal}</h4>
          <h4>{this.state.weight}</h4>
          <h4>{this.state.specialty}</h4>
        </div>



      </div>
    )
  }
}

export default Hog;
