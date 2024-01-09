import React from "react";
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.png";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import menu_icon from "../Assets/Images/ep_menu.png";
import filter_icon from "../Assets/Images/cil_filter.png";
import notificatn_icon from "../Assets/Images/Group 10.png";
import user_icon from "../Assets/Images/ooui_user-avatar-outline.png";
import { Container,Row,Col, Nav } from "react-bootstrap";

function Header() {
  return (
    <Container >
      <Nav class="navbar navbar-expand-lg bg-body-tertiary">
       <Container >
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
           
            <Col sm={}className="ml-auto text-right">
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
          <Row className=" mt-2 ">
            <Col>
            <Col>
            <img
                src={column_icon}
                alt="Local Icon"
                className="img-thumbnail"
              />
              </Col>
              <Col>
              <img src={list_icon} className="img-thumbnail" />
              </Col>

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
      </Nav>
  </Container>
  );
}

export default Header;
