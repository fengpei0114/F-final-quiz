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
