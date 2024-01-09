import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketItem from "../Components/TicketItem";



function ViewTickets() {
  return (
    <Container className="bg-white">
      <ol className="list-group">
        <TicketItem />
        <TicketItem />
        <TicketItem />
      </ol>
    </Container>
  );
}

export default ViewTickets;
