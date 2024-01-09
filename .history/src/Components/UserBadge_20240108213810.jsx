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
       
        <i className="fas fa-circle">   <span className="ms-1 text-re"> {initials} {name}</span></i>
      </Badge>
   
    </div>
  );
};

export default UserBadge;
