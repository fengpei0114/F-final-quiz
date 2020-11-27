import React, { Component } from 'react';
import './App.scss';
import { Header } from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
      </div>
    );
  }
}

export default App;
