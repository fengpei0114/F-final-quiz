import React from 'react';
import './Header.scss';

export const Header = (Props) => {
  const { shouldUpdate } = Props;
  const sortGroup = () => {
    shouldUpdate();
  };

  return (
    <header>
      <span>分组列表</span>
      <button type="button" onClick={sortGroup}>
        分组学员
      </button>
    </header>
  );
};
