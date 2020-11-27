import React, { Component } from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { TraineeList } from '../TraineeList/TraineeList';
import { TrainerList } from '../TrainerList/TrainerList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
