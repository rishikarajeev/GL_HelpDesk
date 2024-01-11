import React from "react";

import menu_icon from "../Assets/Images/ep_menu.png";
import notificatn_icon from "../Assets/Images/Group 10.png";
import user_icon from "../Assets/Images/ooui_user-avatar-outline.png";
import { Container, Row, Col, Navbar, Nav, Button,Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes,faPlus  } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Container fluid>
      <Row className=" justify-content-end mt-3 mb-3">
        <Col lg={4}>
          <Row>
            <a class="navbar-brand fs-3 fw-bolder" href="#">
              Welcome
            </a>
          </Row>
          <Row>
            <span>Lets build your workflow in few steps</span>
          </Row>
        </Col>

        <Col lg={8} className="text-end">
          <Col>
        <Button variant="btn btn-outline-primary selectedColor me-2">
        <span className="small ms-2 text-white p-2">Add</span>
            <FontAwesomeIcon icon={faPlus } className="small" />
         
          </Button>
          </Col>
          <Col>
          <img
            src={menu_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
          </Col>
          <
          <img
            src={notificatn_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
          <img
            src={user_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
            <>
          <Dropdown  >
            <Dropdown.Toggle
              variant="outline-secondary" className="bg-white"
              id="dropdown-basic"
              style={{ width: "120px" }}
            >
             Sharun Das
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sharun </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sharun</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </>

         
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
