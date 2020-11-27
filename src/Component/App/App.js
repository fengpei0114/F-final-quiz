import React, { Component } from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { MemberList } from '../MemberList/MemberList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <MemberList resource="trainers?grouped=false" type="讲师" />
        <MemberList resource="trainees?grouped=false" type="学员" />
      </div>
    );
  }
}

export default App;
