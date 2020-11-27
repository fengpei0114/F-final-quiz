import React, { useEffect, useState } from 'react';
import './TraineeList.scss';
import { List } from '../List/List';
import { TraineeApi } from '../../Api/TraineeApi';

// const data = [
//   {
//     id: 1,
//     name: 'Foo',
//   },
//   {
//     id: 2,
//     name: 'Bar',
//   },
//   {
//     id: 3,
//     name: 'Foo',
//   },
//   {
//     id: 4,
//     name: 'Bar',
//   },
//   {
//     id: 5,
//     name: 'Foo',
//   },
//   {
//     id: 6,
//     name: 'Bar',
//   },
// ];

export const TraineeList = () => {
  const [trainees, setTrainees] = useState([]);
  useEffect(() => {
    TraineeApi.getAllTrainees().then((index) => setTrainees(index));
  }, []);
  return (
    <div className="trainee_div">
      <span className="trainee-tittle">学员列表</span>
      {trainees.map((trainee) => (
        <List member={trainee} />
      ))}
      <button type="button" className="add_trainee">
        +添加学员
      </button>
    </div>
  );
};
