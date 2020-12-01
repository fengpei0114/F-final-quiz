import React from 'react';
import './Header.scss';

export const Header = (Props) => {
  const { shouldUpdate } = Props;
  const sortGroup = () => {
    shouldUpdate();
  };

  return (
    <header data-testid="header">
      <span>分组列表</span>
      <button type="button" onClick={sortGroup} data-testid="sortGroup-btn">
        分组学员
      </button>
    </header>
  );
};
// TODO GTB-工程实践: - 这个组件按照业务应该属于GroupList的一部分
