import React from "react";
import UserBadge from "../Components/UserBadge";
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
