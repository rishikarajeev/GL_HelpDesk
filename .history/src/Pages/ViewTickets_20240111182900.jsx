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
  Dropdown,
  DropdownButton
} from "react-bootstrap";
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
      <Row className=" mt-3 mb-2  ">
        <Col>
          <img src={column_icon} alt="Local Icon" />

          <img src={list_icon} />
        </Col>
        <Col className="d-none d-lg-block">
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
        <Col className="d-none d-lg-block ">
          <img
            src={delete_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 bg-white p-2"
          />
          <>
          <Dropdown  >
            <Dropdown.Toggle
              variant="outline-secondary" className="bg-white"
              id="dropdown-basic"
              style={{ width: "100px" }}
            >
              Assign to
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> Assign to </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sharun</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </>

        
          <Button variant="btn btn-outline-secondary bg-white me-2">
            <FontAwesomeIcon icon={faTimes} className="small" />
            <span className="small ms-2">close</span>
          </Button>
        </Col>
        <Col className="text-end d-none d-lg-block"  >
          <img
            src={search_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
          <img
            src={filter_icon}
            alt="Local Icon"
            className="img-thumbnail me-2 p-2 bg-white"
          />
            <>
          <Dropdown  >
            <Dropdown.Toggle
              variant="outline-secondary" className="bg-white"
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
