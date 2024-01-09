import React from "react";
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.png";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import menu_icon from "../Assets/Images/ep_menu.png";
import filter_icon from "../Assets/Images/cil_filter.png";
import notificatn_icon from "../Assets/Images/Group 10.png";
import user_icon from "../Assets/Images/ooui_user-avatar-outline.png";
import { Container,Row,Col, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
     
       <Container  fluid>
          <Row className=" justify-content-evenly">
            <Col sm={8}>
              <Row>
                <a class="navbar-brand" href="#">
                  Welcome{" "}
                </a>
              </Row>
              <Row >
                <span>Lets build your workflow in few steps</span>
              </Row>
            </Col>
           
            <Col sm={4 } className="text-right">
              
              <img src={menu_icon} alt="Local Icon" className="img-thumbnail" />
              <img
                src={notificatn_icon}
                alt="Local Icon"
                className="img-thumbnail"
              />
              <img src={user_icon} alt="Local Icon" className="img-thumbnail" />
              <button
                class="btn btn-outline-secondary btn-sm dropdown-toggle "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sharun Das
              </button>
            </Col>
          </Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className=" mt-2 ">
            <Col>
           
            <img
                src={column_icon}
                alt="Local Icon"
                className="img-thumbnail"
              />
              
              <img src={list_icon} className="img-thumbnail" />
          

            </Col>
            <Col>
            <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckDefault">
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
              <img src={search_icon} alt="Local Icon" className="img-thumbnail" />
              <img src={filter_icon} alt="Local Icon" className="img-thumbnail" />
              <button
                    class="btn btn-outline-secondary btn-sm dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By Newest
                  </button>
            
              </Col>

          </Row> 

</Container>
     
</Navbar>
  );
}

export default Header;
