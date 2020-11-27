import React, { useState } from 'react';
import './List.scss';
import { getData } from '../../../Api/getData';

export const List = (Props) => {
  const { member, deleteMember, resource } = Props;
  const [isDeleteBtnShow, setIsDeleteBtnShow] = useState(false);
  const onMouseOver = () => {
    setIsDeleteBtnShow(true);
  };
  const onMouseOut = () => {
    setIsDeleteBtnShow(false);
  };
  const deleteListMember = () => {
    getData.deleteById(resource, member.id).then();
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
