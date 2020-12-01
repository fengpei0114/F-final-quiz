import React, { Component } from 'react';
import './App.scss';
import { Header } from './Component/Header/Header';
import { MemberList } from './Component/MemberList/MemberList';
import { GroupList } from './Component/GroupList/GroupList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateStatus: 0,
    };
  }
  // TODO GTB-综合: - 使用updateStatus去同步各个组件是否应该更新数据的方式不太好，可以将groups，trainees、trainers数据以及获取数据的操作提取到App组件中，传递给子组件

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
// TODO GTB-工程实践: + 有合理的小步提交
// TODO GTB-完成度: + 获取分组列表，学员列表，讲师列表，添加讲师/学员，删除讲师/学员
// TODO GTB-完成度: - Bug, 刷新页面后，之前已分组的状态需要保留展示出来（没有实现didMount时获取分组列表的功能）
// TODO GTB-知识点: + 使用了react hooks
