import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Route } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import HomePage from "./Pages/HomePage";
import SideBar from "./Components/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import Switc

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs lg="1">
            <SideBar />
          </Col>
          <Col xs lg="8">
            <Header/>
            <Switch>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/showtickets" element={<ViewTickets />}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
