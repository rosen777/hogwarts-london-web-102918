import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

class App extends Component {

  state = {
      allHogs: hogs
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <HogContainer allHogs={this.state.allHogs}/>
          
      </div>
    )
  }
}

export default App;
