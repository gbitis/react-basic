import React, { Component } from 'react';
import Slideshow from './components/Slideshow'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slideshow />
        <Slideshow />
        <Slideshow />
      </div>
    );
  }
}

export default App;
