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
       
      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center">
      <span className="fs-4">{letter}</span>
    </div> <i  <span className="ms-1 text-black"> {name}</span></i>
      </Badge>
   
    </div>
  );
};

export default UserBadge;
