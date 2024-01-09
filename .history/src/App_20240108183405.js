import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import SideBar from "./Components/SideBar";
import { Container,Row,Col } from "react-bootstrap";


function App() {
  return (
    <BrowserRouter>
     <Container fluid>
        <Row>
          <Col>
          <SideBar/>   
          </Col> 
           <Col xs={6}>
            <Routes>
            <Route path="/showtickets" element={<ViewTickets />}></Route>
            </Routes>
            </Col>
            <Col xs={6}>
              </Col>
        
            </Row>
            </Container>
    </BrowserRouter>
  );
}

export default App;
