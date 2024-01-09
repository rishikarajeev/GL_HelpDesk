import React from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
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
  const handleDelete = () => {};

  return (
    <>
      <Navbar expand="lg" variant="dark" className="sideBg d-flex flex-column w-100 order-0">
        <Navbar.Toggle aria-controls="sidebar" className="order-0 ml-auto" />
        <Navbar.Collapse id="sidebar">
          <Nav className="flex-row"></Nav>
          <Nav.Item className="nav-item mb-5">
            <Row className="justify-content-end mt-3 mb-3">
              <Col sm={8}>
                <Row>
                  <Navbar.Brand className="fs-3 fw-bolder">Welcome</Navbar.Brand>
                </Row>
                <Row>
                  <span>Lets build your workflow in few steps</span>
                </Row>
              </Col>
              <Col sm={4} className="text-end">
                <img src={menuIcon} alt="Menu Icon" className="img-thumbnail me-2" />
                <img src={notificationIcon} alt="Notification Icon" className="img-thumbnail me-2" />
                <img src={userIcon} alt="User Icon" className="img-thumbnail me-2" />
                <Button className="btn btn-outline-secondary btn-sm dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sharun Das
                </Button>
              </Col>
            </Row>
          </Nav.Item>
          <Nav.Item className="nav-item mb-5">
            <Row className="mt-3 mb-3">
              <Col>
                <img src={columnIcon} alt="Column Icon" />
                <img src={listIcon} alt="List Icon" />
              </Col>
              <Col>
                <div className="formCheck form-switch ms-0">
                  <label className="formCheck-label small p" htmlFor="flexSwitchCheckDefault">
                    Show tickets created by me
                  </label>
                  <input className="formCheck-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
              </Col>
              <Col>
                <img src={deleteIcon} alt="Delete Icon" className="img-thumbnail me-2" />
                <button className="btn btn-outline-secondary btn-sm dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Assign to
                </button>
                <Button variant="btn btn-outline-secondary me-2">
                  <FontAwesomeIcon icon={faTimes} className="small" />
                  <span className="small ms-2">close</span>
                </Button>
              </Col>
              <Col className="text-end">
                <img src={searchIcon} alt="Search Icon" className="img-thumbnail me-2" />
                <img src={filterIcon} alt="Filter Icon" className="img-thumbnail me-2" />
                <button className="btn btn-outline-secondary btn-sm dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort By Newest
                </button>
              </Col>
            </Row>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
