import React, { Component } from 'react';
import './App.css';
import Aside from './Components/Aside';
import Inputs from './Page/Inputs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='grid'>
          <Aside/>
          <div className="content">
            <Inputs />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
