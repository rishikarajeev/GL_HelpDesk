// UserBadge.js
import React from "react";
import { Badge } from "react-bootstrap";
import "../Assets/Css/Styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const UserBadge = ({ name }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div>
      <Badge bg="secondary-subtle ">
        <div className="rounded-circle bg-secondary-subtle text-dark d-flex align-items-center justify-content-center">
          <div className="circle-icon">
            {" "}
            <span>{initials} </span>{" "}
          </div>
          <span className="ms-2">{name} </span>
  
      <FontAwesomeIcon icon={faTimes} className=" ms-2"/>
 
        </div>
      </Badge>
    </div>
  );
};

export default UserBadge;
