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
        <Col lg={8}>
          <Row>
            <a class="navbar-brand fs-3 fw-bolder" href="#">
              Welcome
            </a>
          </Row>
          <Row>
            <span>Lets build your workflow in few steps</span>
          </Row>
        </Col>

        <Col lg={4} className="text-end g-0 px-0 mx-0">
          <Row className="g-0 px-0 mx-0">
          <Col>
        <Button variant="btn btn-outline-primary selectedColor me-2 "  style={{ width: "120px" }}>
        <span className="small ms-2 text-white ">Add</span>
            <FontAwesomeIcon icon={faPlus } className="small p-0" />
         
          </Button>
          </Col>
          <Col>
          <img
            src={menu_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
          </Col>
          <Col>
          <img
            src={notificatn_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
          </Col>
          <Col>
          <img
            src={user_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
          </Col>
          <Col>
            
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
          </Col>

         </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
