// UserBadge.js
import React from "react";
import { Badge } from "react-bootstrap";
import "../Assets/Css/Styles.css";


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
          <button type="button" className="btn-close" aria-label="Close">
      <FaTimes />
    </button>
        </div>
      </Badge>
    </div>
  );
};

export default UserBadge;
