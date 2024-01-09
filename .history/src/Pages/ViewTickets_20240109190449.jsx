import React from "react";
import TicketItem from "../Components/TicketItem";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.png";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import delete_icon from "../Assets/Images/material-symbols_delete-outline.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import filter_icon from "../Assets/Images/cil_filter.png";

function ViewTickets() {
  return (
    <Container className="bg-white">
      <Row className=" mt-3 mb-2  ">
        <Col >
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
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </Col>
        <Col className="d-none d-lg-block">
          <img src={delete_icon} alt="Local Icon" className="img-thumbnail me-2" />

          <button
            className="btn btn-outline-secondary btn-sm dropdown-toggle me-2 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Assign to
          </button>
          <Button variant="btn btn-outline-secondary me-2">
            <FontAwesomeIcon icon={faTimes}  className="small" />
           <span className="small ms-2">close</span> 
          </Button>
        </Col>
        <Col className="text-end d-none d-lg-block">
          <img src={search_icon} alt="Local Icon" className="img-thumbnail me-2" />
          <img src={filter_icon} alt="Local Icon" className="img-thumbnail me-2" />
          <button
            class="btn btn-outline-secondary btn-sm dropdown-toggle me-2 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By Newest
          </button>
        </Col>
      </Row>
      <ListGroup>
      <ListGroup.Item>
        <TicketItem />
        <TicketItem />
        <TicketItem />
   </ListGroup.Item>
   
    </Container>
  );
}

export default ViewTickets;
