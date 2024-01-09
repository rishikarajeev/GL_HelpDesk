// UserBadge.js
import React from 'react';
import { Badge } from 'react-bootstrap';



const UserBadge = ({ name }) => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div>
      <Badge bg="primary">
        {initials}
        <i icon={faUser} className="ms-1" />
      </Badge>
      <span className="ms-2">{name}</span>
    </div>
  );
};

export default UserBadge;
