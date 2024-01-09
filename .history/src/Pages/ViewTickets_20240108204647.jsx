import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../Assets/Css/Styles.css"

function ViewTickets() {
  return (
   
  <Container fluid className='bgColor'>
    <Row className="col-md-3 col-lg-2 d-md-block  sidebar align-items-end ">
      <Col>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      </Col>
      <Col>
      <Row></Row>
      <Row></Row>
      </Col>
    </Row>
  </Container>
  )
}

export default ViewTickets