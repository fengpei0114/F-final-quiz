import React from 'react';
import './TrainerList.scss';
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

export const TrainerList = () => {
  return (
    <div className="trainers_div">
      <span className="trainers-tittle">讲师列表</span>
      {data.map((trainer) => (
        <List member={trainer} />
      ))}
      <button type="button" className="add_trainer">
        +添加讲师
      </button>
    </div>
  );
};
