import React from "react";
import { Container,Row,Col } from 'react-bootstrap'
import Header from "../Components/Header";

function HomePage() {
  return (
    <Container fluid className="bgColor">
      <Row className="col-md-3 col-lg-2 d-md-block  sidebar align-items-end ">
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default HomePage;
