import React, { useState } from 'react';
import './List.scss';
import { getData } from '../../../Api/getData';

// TODO GTB-工程实践: - 组件命名不合理，这个跟list没有任何关系，可以参考：PersonnelItem
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
    // TODO GTB-知识点: - 如果第二步是依赖第一步的，需要将第二步放在第一步的then()里面，或者使用async/await
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
