import React, { Component } from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { MemberList } from '../MemberList/MemberList';
import { GroupList } from '../GroupList/GroupList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateStatus: 0,
    };
  }

  shouldUpdate = () => {
    this.setState((prev) => ({ updateStatus: prev.updateStatus + 1 }));
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <Header shouldUpdate={this.shouldUpdate} />
        <GroupList updateStatus={this.state.updateStatus} />
        <MemberList resource="trainers" type="讲师" updateStatus={this.state.updateStatus} />
        <MemberList resource="trainees" type="学员" updateStatus={this.state.updateStatus} />
      </div>
    );
  }
}

export default App;
