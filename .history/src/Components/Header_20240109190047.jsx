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
 

    
 
    </Container>
  );
}

export default Header;
