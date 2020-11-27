import React, { useEffect, useState } from 'react';
import './MemberList.scss';
import { List } from '../List/List';
import { getData } from '../../Api/getData';

export const MemberList = (Props) => {
  const { resource, type } = Props;
  const [isInAdding, setIsInAdding] = useState(false);
  const [member, setMember] = useState([]);
  const [addName, setAddName] = useState('');
  useEffect(() => {
    getData.getAll(resource).then((index) => setMember(index));
  }, [isInAdding]);

  const clickAddMemberBtn = () => {
    setIsInAdding(true);
  };
  const addMember = (e) => {
    setAddName(e.target.value);
  };
  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      getData.createNew(resource, addName).then();
      setIsInAdding(false);
      setAddName('');
    }
  };

  return (
    <div className="memberList_div">
      <span className="memberList-tittle">{type}列表</span>
      {member.map((trainee, index) => (
        <List member={trainee} key={index} />
      ))}
      {isInAdding ? (
        <input
          type="text"
          id="add_member_input"
          onChange={addMember}
          value={addName}
          onKeyPress={handleEnterKey}
        />
      ) : (
        <button type="button" id="add_member_btn" onClick={clickAddMemberBtn}>
          +添加{type}
        </button>
      )}
    </div>
  );
};
