import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import HomePage from "./Pages/HomePage";
import SideBar from "./Components/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xl={1}>
            <SideBar />
          </Col>
          <Col xl={11} className="">
            <Header />
            <Routes>
              <Route path="/" element={<ViewTickets />}></Route>
              <Route path="/showtickets" element={<ViewTickets />}></Route>
              <Route path="/home" element={<HomePage />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
