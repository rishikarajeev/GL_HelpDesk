import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import HomePage from "./Pages/HomePage";
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
            <Headers
           
          </Col>
        </Row>
         <Routes>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/showtickets" element={<ViewTickets />}></Route>
            </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;