import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import UserBadge from "../Components/UserBadge";
import userAddIcon from '../Assets/Images/Group 758674.png'

function TicketItem() {
  const userName = "John";
  return (
    <Container fluid>
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
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Ac display is not working
              </label>
            </div>
          </Row>
          <Row>
            <p className="small text-wrap">
              To install the getlead app either scan the QR code and download
              the app or get a link to your mobile number
            </p>
          </Row>
        </Col>
        <Col xl={2}>
          <Row>
            <Button variant="outline-secondary" size="sm" className="me-2">
              High
            </Button>
            <Button variant="outline-secondary" size="sm" className="me-2">
              Pending
            </Button>
          </Row>
        </Col>
        <Row>
          <Col xl={5} className="mt-2">
            <Row>
            <Col>
            <UserBadge name={userName} />
            </Col>
            <Col>
            <Image
            src={userAddIcon}
            alt="Local Icon"
            className=" me-2"
          />
         </Col
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
