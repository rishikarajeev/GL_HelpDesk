import React from "react";
import TicketItem from "../Components/TicketItem";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  ListGroup,
  Dropdown,  DropdownButton,
} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.png";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import delete_icon from "../Assets/Images/material-symbols_delete-outline.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import filter_icon from "../Assets/Images/cil_filter.png";

function ViewTickets() {
  return (
    <Container>
      <Row className=" mt-3   ">
        <Col sm={1}>
          <img src={column_icon} alt="Local Icon" />

          <img src={list_icon} />
        </Col>
        <Col sm={3} className="d-none d-lg-block text-start">
          <div class="form-check form-switch ms-0">
            <label
              class="form-check-label small p"
              for="flexSwitchCheckDefault"
            >
              Show tickets created by me
            </label>
            <input
              className="form-check-input p-2"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </Col>
        <Col sm={4} className="d-none d-lg-block ">
          <Row>
            <Col>
              <Image
                src={delete_icon}
                alt="Local Icon"
                className="img-thumbnail me-2 bg-white "
              />
            </Col>
            <Col className="mx-0 p-0 g-0">
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  className="bg-white"
                  id="dropdown-basic"
                >
                  Assign to
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1"> Assign to </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Sharun</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col>
              <Button variant="btn btn-outline-secondary bg-white me-2">
                <FontAwesomeIcon icon={faTimes} className="small" />
                <span className="small ms-2">close</span>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col sm={4} className="text-end d-none d-lg-block">
          <Row>
          <Col>
          <img
            src={search_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
          </Col>
          <Col>

          <img
            src={filter_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
          <>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary"
                className="bg-white"
                id="dropdown-basic"
                style={{ width: "150px" }}
              >
                Sort By Newest
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"> Assign to </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Sharun</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
          </Row>
        </Col>
      </Row>
      <ListGroup className="p-3">
        <ListGroup.Item className=" border mb-3">
          <TicketItem />
        </ListGroup.Item>
        <ListGroup.Item className=" border mb-3">
          <TicketItem />
        </ListGroup.Item>
        <ListGroup.Item className=" border mb-3">
          <TicketItem />
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default ViewTickets;
