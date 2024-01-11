import React from "react";
import { Container, Row, Col, Button, Image,Dropdown } from "react-bootstrap";
import UserBadge from "../Components/UserBadge";
import userAddIcon from "../Assets/Images/Group 758674.png";

function TicketItem() {
  const userName = "John";
  return (
    <Container fluid className="p-2">
      <Row>
        <Col xl={10}>
          <Row>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label  fw-bolder"
                htmlFor="flexCheckDefault"
              >
                Ac display is not working
              </label>
            </div>
          </Row>
          <Row>
            <p className="small text-wrap txt-ticket-color">
              To install the getlead app either scan the QR code and download
              the app or get a link to your mobile number
            </p>
          </Row>
        </Col>
        <Col xl={3}>
          <Row>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
               High
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">High </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Low</Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
          
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
               Open
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Open </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Pending</Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </Col>
        <Row>
          <Col xl={5} className="mt-2">
            <Row>
              <Col sm={3}>
                <UserBadge name={userName} />
              </Col>
              <Col sm={2}>
                <Image src={userAddIcon} alt="Local Icon" rounded />
              </Col>
            </Row>
          </Col>

          <Col xl={7} className="text-end">
            <p className="text-muted small">
              Created on Aug 15 10.30pm | Last Updated: 5 hours Ago
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default TicketItem;
