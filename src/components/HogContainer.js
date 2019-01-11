import React, { Component } from 'react';
import Hog from './Hog'

class HogContainer extends Component {
  state = {
      arrayOfHogs: this.props.allHogs
  }

  sortFunctionByName = () => {
    let sortedHogs = [...this.state.arrayOfHogs]


    sortedHogs.sort(
      function(a, b) {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      });

    this.setState({
      arrayOfHogs: sortedHogs
    })
  }

  sortFunctionByWeight = () => {
    let weight = ["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]

    let sortedHogs = [...this.state.arrayOfHogs]

    console.log(this.state.arrayOfHogs)

    sortedHogs.sort(
      function(a, b) {
        if(a[weight] < b[weight]) { return -1; }
        if(a[weight] > b[weight]) { return 1; }
        return 0
      });

    this.setState({
        arrayOfHogs: sortedHogs
      })

  }

  sortFunctionByGreased = () => {

    let sortedHogs = [...this.state.arrayOfHogs]

    console.log(this.state.arrayOfHogs)

    sortedHogs.sort(
      function(a, b) {
        if(a.greased < b.greased) { return -1; }
        if(a.greased > b.greased) { return 1; }
        return 0
      });

      this.setState({
        arrayOfHogs: sortedHogs
      })

      console.log(sortedHogs)

  }

  render() {
    console.log(this.props)

    return (

      <div className="container">
        <button value = "weight" onClick={this.sortFunctionByWeight}>Filter By Weight</button>
        <button value = "name" onClick={this.sortFunctionByName}>Filter By Name</button>
        <button value = "greased" onClick={this.sortFunctionByGreased}>Filter By Greased</button>
        {
        this.state.arrayOfHogs.map(h => <Hog selectedHog={h} />)
        }
      </div>
    )
  }
}

export default HogContainer;
