import React from 'react';
import './TraineeList.scss';
import { List } from '../List/List';

const data = [
  {
    id: 1,
    name: 'Foo',
  },
  {
    id: 2,
    name: 'Bar',
  },
  {
    id: 3,
    name: 'Foo',
  },
  {
    id: 4,
    name: 'Bar',
  },
  {
    id: 5,
    name: 'Foo',
  },
  {
    id: 6,
    name: 'Bar',
  },
];

export const TraineeList = () => {
  return (
    <div className="trainee_div">
      <span className="trainee-tittle">学员列表</span>
      {data.map((trainee) => (
        <List member={trainee} />
      ))}
      <button type="button" className="add_trainee">
        +添加学员
      </button>
    </div>
  );
};
