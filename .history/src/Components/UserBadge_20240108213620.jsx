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
        <i className="fas fa-heart"></i>
      </Badge>
   
    </div>
  );
};

export default UserBadge;
