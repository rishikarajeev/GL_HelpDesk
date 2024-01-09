import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import HomePage from "./Pages/HomePage";
import SideBar from "./Components/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
     
        <div className=""=row>
          <Col xs lg="1">
            <SideBar />
          </Col>
          <Col xs lg="8">
            <Header/>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/showtickets" element={<ViewTickets />}></Route>
            </Routes>
          </Col>
        </Row>
    
    </BrowserRouter>
  );
}

export default App;
