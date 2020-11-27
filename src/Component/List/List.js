import React from 'react';
import './List.scss';

export const List = (Props) => {
  const { member } = Props;
  return (
    <ul>
      <li className="list-member">
        {member.id}.{member.name}
      </li>
    </ul>
  );
};
