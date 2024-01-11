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
  Image,
} from "react-bootstrap";
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.jpg";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import delete_icon from "../Assets/Images/material-symbols_delete-outline.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import filter_icon from "../Assets/Images/cil_filter.png";

function ViewTickets() {
  return (
    <Container>
     <Row className="mt-3 mb-2 ">
  <Col className="col-4 p-0">
    <img src={column_icon} alt="Local Icon" />
    <img src={list_icon} />
  </Col>
  <Col className=" col-aut d-none d-lg-block p-0 justify-content-evenly">
    <div className="form-check form-switch align-items-start">
      <label className="form-check-label small p" htmlFor="flexSwitchCheckDefault">
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
  <Col className=" col-auto d-none d-lg-block p-0 y">
    <Image
      src={delete_icon}
      alt="Local Icon"
      className="img-thumbnail bg-white p-2"
    />
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-secondary"
        id="dropdown-basic"
        className="bg-white"
      >
        Assign to
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Assign to</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sharun</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Button variant="btn btn-outline-secondary bg-white ">
      <FontAwesomeIcon icon={faTimes} className="small" />
      <span className="small ms-2">close</span>
    </Button>
  </Col>
  <Col className=" text-end d-none d-lg-block p-0">
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
    <button
      className="btn btn-outline-secondary btn-sm dropdown-toggle me-2 p-2 bg-white"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Sort By Newest
    </button>
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
