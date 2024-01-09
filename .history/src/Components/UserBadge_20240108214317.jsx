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
          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center">
      <Badge bg="primary">
    
        {initials}
        <i className="fas fa-heart"></i>
      </Badge>
      <span className="ms-2">{name}</span>
      </div>
    </div>
  );
};

export default UserBadge;