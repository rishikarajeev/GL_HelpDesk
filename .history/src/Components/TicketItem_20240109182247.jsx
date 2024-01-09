import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserBadge from "../Components/UserBadge";

function TicketItem() {
  const userName = "John";
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <Container>
        <Row>
          <Col xs={10}>
          <Row></Row>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Ac display is not working
                </label>
              </div>
            </div>
            <div className="row">
              <p className="small text-wrap">
                To install the getlead app either scan the QR code and download
                the app or get a link to your mobile number
              </p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="row">
              <Button variant="outline-secondary" size="sm" className="me-2">
                High
              </Button>
              <Button variant="outline-secondary" size="sm" className="me-2">
                Pending
              </Button>
            </div>
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
    </li>
  );
}

export default TicketItem;
