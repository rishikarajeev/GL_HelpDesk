import React from "react";

import menu_icon from "../Assets/Images/ep_menu.png";
import notificatn_icon from "../Assets/Images/Group 10.png";
import user_icon from "../Assets/Images/ooui_user-avatar-outline.png";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Container fluid>
      <Row className=" justify-content-end mt-3 mb-3">
        <Col sm={8}>
          <Row>
            <a class="navbar-brand fs-3 fw-bolder" href="#">
              Welcome
            </a>
          </Row>
          <Row>
            <span>Lets build your workflow in few steps</span>
          </Row>
        </Col>

        <Col sm={4} className="text-end">
        <Button variant="btn btn-outline-secondary me-2">
        <span className="small ms-2">close</span>
            <FontAwesomeIcon icon={faTimes} className="small" />
         
          </Button>
          <img
            src={menu_icon}
            alt="Local Icon"
            className="img-thumbnail me-2"
          />
          <img
            src={notificatn_icon}
            alt="Local Icon"
            className="img-thumbnail me-2"
          />
          <img
            src={user_icon}
            alt="Local Icon"
            className="img-thumbnail me-2"
          />
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
    </Container>
  );
}

export default Header;
