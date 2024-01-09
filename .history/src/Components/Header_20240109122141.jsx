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
    <Container fluid>
      <Nav class="navbar navbar-expand-lg bg-body-tertiary">
       <Container fluid>
          <Row className=" justify-content-evenly">
            <Col >
              <Row>
                <a class="navbar-brand" href="#">
                  Welcome{" "}
                </a>
              </div>
              <div className="row">
                <span>Lets build your workflow in few steps</span>
              </div>
            </Col>
           
            <div className="col ml-auto text-right">
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
            </div>
          </Row>
          {/* <div className="row mt-2 ">
            <div className="col">
            <div className="col">
            <img
                src={column_icon}
                alt="Local Icon"
                className="img-thumbnail"
              />
              </div>
              <div className="col">
              <img src={list_icon} className="img-thumbnail" />
              </div>

            </div>
            <div className="col">
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
              </div>
              <div className="col">
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
            
              </div>

          </div> */}

</Container>
      </Nav>
  </Container>
  );
}

export default Header;
