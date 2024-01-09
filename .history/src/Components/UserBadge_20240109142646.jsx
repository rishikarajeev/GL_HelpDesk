// UserBadge.js
import React from 'react';
import { Badge } from 'react-bootstrap';
import "../Assets/Css/Styles.css"



const UserBadge = ({ name }) => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div>
      <Badge bg="secondary">
      <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center">
 
        <div className="circleicon"> <span >{initials} </span> </div>
        <span className="ms-2">{name}</span>
        </div>
      </Badge>
     
     
    </div>
  );
};

export default UserBadge;
