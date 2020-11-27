import React, { useState } from 'react';
import './List.scss';

export const List = (Props) => {
  const { member, deleteMember } = Props;
  const [isDeleteBtnShow, setIsDeleteBtnShow] = useState(false);
  const onMouseOver = () => {
    setIsDeleteBtnShow(true);
  };
  const onMouseOut = () => {
    setIsDeleteBtnShow(false);
  };
  const deleteListMember = () => {
    deleteMember(member.id);
  };
  return (
    <ul>
      <li
        className="list-member"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
        onFocus={() => {}}
      >
        {member.id}.{member.name}
        {isDeleteBtnShow && (
          <button type="button" className="deleteBtn" onClick={deleteListMember}>
            X
          </button>
        )}
      </li>
    </ul>
  );
};
