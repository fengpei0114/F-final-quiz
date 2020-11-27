import React, { useEffect, useState } from 'react';
import './TrainerList.scss';
import { List } from '../List/List';
import { TrainerApi } from '../../Api/TrainerApi';

export const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    TrainerApi.getAllTrainers().then((index) => setTrainers(index));
  }, []);
  return (
    <div className="trainers_div">
      <span className="trainers-tittle">讲师列表</span>
      {trainers.map((trainer) => (
        <List member={trainer} />
      ))}
      <button type="button" className="add_trainer">
        +添加讲师
      </button>
    </div>
  );
};
