import './GroupList.scss';
import React, { useEffect, useState } from 'react';
import { List } from '../List/List';
import { getData } from '../../../Api/getData';

export const GroupList = (Props) => {
  const { updateStatus } = Props;
  const [group, setGroup] = useState([]);
  useEffect(() => {
    if (updateStatus !== 0) getData.getGroups().then((res) => setGroup(res));
  }, [updateStatus]);

  const deleteTrainer = (id) => {
    const newArray = [];
    group.forEach((now, index) => {
      newArray[index] = now;
      newArray[index].trainers = now.trainers.filter((item) => {
        return item.id !== id;
      });
    });
    setGroup(newArray);
  };
  const deleteTrainee = (id) => {
    const newArray = [];
    group.forEach((now, index) => {
      newArray[index] = now;
      newArray[index].trainees = now.trainees.filter((item) => {
        return item.id !== id;
      });
    });
    setGroup(newArray);
  };
  return group.map((team, index) => (
    <div className="group_div" key={index} data-testid="group-list-container">
      <div className="group_title">
        <p>{team.id}组</p>
        <span>
          {team.trainers.map((trainer, num) => (
            <List member={trainer} key={num} deleteMember={deleteTrainer} resource="trainers" />
          ))}
        </span>
      </div>
      <div className="group_trainees">
        {team.trainees.map((trainee, num) => {
          return (
            <List member={trainee} key={num} deleteMember={deleteTrainee} resource="trainees" />
          );
        })}
      </div>
    </div>
  ));
};
