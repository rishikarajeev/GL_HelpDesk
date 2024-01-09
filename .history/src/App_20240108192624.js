import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import HomePage from "./Components/HomePage";
import SideBar from "./Components/SideBar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs lg="1">
            <SideBar />
          </Col>
          <Col xs lg="8">
           
          </Col>
        </Row>
        
      </Container>
    </BrowserRouter>
  );
}

export default App;
