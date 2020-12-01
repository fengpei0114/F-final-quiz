import './GroupList.scss';
import React, { useEffect, useState } from 'react';
import { List } from '../List/List';
import { getData } from '../../../Api/getData';

export const GroupList = (Props) => {
  const { updateStatus } = Props;
  const [group, setGroup] = useState([]);
  // TODO GTB-工程实践: - 变量命名不合理，这里应该是groups
  useEffect(() => {
    if (updateStatus !== 0) getData.getGroups().then((res) => setGroup(res));
  }, [updateStatus]);

  // TODO GTB-综合: * 这样在前端操作数据有点复杂。在分组列表删除学员/讲师，不触发分组操作，可以把分组和获取分组列表分成两个api, 当删除数据之后在请求一次数据
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
    // TODO GTB-知识点: - 语义化标签使用不合理
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
