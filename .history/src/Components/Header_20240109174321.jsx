import React from "react";
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.png";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import menu_icon from "../Assets/Images/ep_menu.png";
import filter_icon from "../Assets/Images/cil_filter.png";
import notificatn_icon from "../Assets/Images/Group 10.png";
import user_icon from "../Assets/Images/ooui_user-avatar-outline.png";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import delete_icon from "../Assets/Images/material-symbols_delete-outline.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


function Header() {
  const handleDelete = () => {};

  return (
    <Container fluid>
      <Row className=" justify-content-end mt-3 mb-3">
        <Col sm={8}>
          <Row>
            <a class="navbar-brand fs-3 fw-bolder" href="#">
              Welcome{" "}
            </a>
          </Row>
          <Row>
            <span>Lets build your workflow in few steps</span>
          </Row>
        </Col>

        <Col sm={4} className="text-end">
          <img src={menu_icon} alt="Local Icon" className="img-thumbnail me-2" />
          <img
            src={notificatn_icon}
            alt="Local Icon"
            className="img-thumbnail me-2"
          />
          <img src={user_icon} alt="Local Icon" className="img-thumbnail me-2" />
          <button
            className="btn btn-outline-secondary btn-sm dropdown-toggle me-2 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sharun Das
          </button>
        </Col>
      </Row>

      <Row className=" mt-3 mb-3 ">
        <Col >
          <img src={column_icon} alt="Local Icon" />

          <img src={list_icon} />
        </Col>
        <Col>
          <div class="form-check form-switch ms-0">
            <label
              class="form-check-label small p"
              for="flexSwitchCheckDefault"
            >
              Show tickets created by me
            </label>

            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </Col>
        <Col>
          <img src={delete_icon} alt="Local Icon" className="img-thumbnail me-2" />

          <button
            className="btn btn-outline-secondary btn-sm dropdown-toggle me-2 "
            type="button"import React, { useState } from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import columnIcon from "../Assets/Images/fluent_column-triple-20-regular.png";
import listIcon from "../Assets/Images/ph_list-bullets-light.png";
import searchIcon from "../Assets/Images/ri_search-line.png";
import menuIcon from "../Assets/Images/ep_menu.png";
import filterIcon from "../Assets/Images/cil_filter.png";
import notificationIcon from "../Assets/Images/Group 10.png";
import userIcon from "../Assets/Images/ooui_user-avatar-outline.png";
import deleteIcon from "../Assets/Images/material-symbols_delete-outline.jpg";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleToggle = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  return (
    <Container fluid>
      <Row className="justify-content-between align-items-center mt-3 mb-3">
        <Col sm={8}>
          <Navbar.Brand className="fs-3 fw-bolder">Welcome</Navbar.Brand>
          <span>Lets build your workflow in few steps</span>
        </Col>

        <Col sm={4} className="text-end">
          <img src={menuIcon} alt="Menu Icon" className="img-thumbnail me-2" onClick={handleToggle} />
          <img src={notificationIcon} alt="Notification Icon" className="img-thumbnail me-2" />
          <img src={userIcon} alt="User Icon" className="img-thumbnail me-2" />
          <Button className="btn btn-outline-secondary btn-sm dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sharun Das
          </Button>
        </Col>
      </Row>

      {isHeaderVisible && (
        <Row className="mt-3 mb-3">
          <Col xs={6} md={3} className="mb-3">
            <img src={columnIcon} alt="Column Icon" className="img-fluid" />
            <img src={listIcon} alt="List Icon" className="img-fluid ms-3" />
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <div className="form-check form-switch ms-0">
              <label className="form-check-label small">
                Show tickets created by me
              </label>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <img src={deleteIcon} alt="Delete Icon" className="img-fluid me-2" />
            <Button variant="btn btn-outline-secondary me-2">
              <FontAwesomeIcon icon={faTimes} className="small" />
              <span className="small ms-2">Close</span>
            </Button>
          </Col>
          <Col xs={6} md={3} className="text-end">
            <img src={searchIcon} alt="Search Icon" className="img-fluid me-2" />
            <img src={filterIcon} alt="Filter Icon" className="img-fluid me-2" />
            <Button className="btn btn-outline-secondary btn-sm dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By Newest
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Header;

            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Assign to
          </button>
          <Button variant="btn btn-outline-secondary me-2">
            <FontAwesomeIcon icon={faTimes}  className="small" />
           <span className="small ms-2">close</span> 
          </Button>
        </Col>
        <Col className="text-end">
          <img src={search_icon} alt="Local Icon" className="img-thumbnail me-2" />
          <img src={filter_icon} alt="Local Icon" className="img-thumbnail me-2" />
          <button
            class="btn btn-outline-secondary btn-sm dropdown-toggle me-2 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By Newest
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
