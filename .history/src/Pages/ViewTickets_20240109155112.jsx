import React from "react";

import "../Assets/Css/Styles.css";
import UserBadge from "../Components/UserBadge";
import Header from "../Components/Header";
import { Container, Row, Col, Navbar, Nav,ListGroup,Form, Button, Dropdown, DropdownButton } from "react-bootstrap";

function ViewTickets() {
  const userName = "John";

  return (
    <Container className="bg-white">
    <ListGroup>
      {[...Array(3).keys()].map((index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
          <Container>
            <Row>
              <Col xs={10}>
                <Row>
                  <Form.Check
                    type="checkbox"
                    id={`flexCheckDefault${index}`}
                    label="Ac display is not working"
                  />
                </Row>
                <Row>
                  <p className="small text-wrap">
                    To install the getlead app either scan the QR code and
                    download the app or get a link to your mobile number
                  </p>
                </Row>
              </Col>
              <Col xs={2}>
                <Row>
                  <DropdownButton id={`dropdown-basic-button${index}`} title="High" variant="outline-secondary">
                    <Dropdown.Item href="#">High</Dropdown.Item>
                    <Dropdown.Item href="#">Medium</Dropdown.Item>
                    <Dropdown.Item href="#">Low</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton id={`dropdown-basic-button${index}`} title="Pending" variant="outline-secondary">
                    <Dropdown.Item href="#">Pending</Dropdown.Item>
                    <Dropdown.Item href="#">Resolved</Dropdown.Item>
                  </DropdownButton>
                </Row>
              </Col>
              <Row>
                <Col xs={5}>
                  <UserBadge name={userName} />
                </Col>
                <Col xs={7} className="text-end">
                  <p className="text-muted small">
                    Created on Aug 15 10.30pm | Last Updated: 5 hours Ago
                  </p>
                </Col>
              </Row>
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Container>
  
  );
}

export default ViewTickets;
