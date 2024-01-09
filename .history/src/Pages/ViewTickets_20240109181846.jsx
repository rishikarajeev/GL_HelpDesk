import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserBadge from "../Components/UserBadge";


const userName = "John";



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
