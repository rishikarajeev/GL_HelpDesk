import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import SideBar from "./Components/SideBar";


function App() {
  return (
    <BrowserRouter>
     <Con
        <Row>
          <Col>
          <SideBar/>   
          </Col> 
          <Col>  
            <Routes>
            <Route path="/showtickets" element={<ViewTickets />}></Route>
            </Routes>
            </Col>
        
            </Row>
      
    </BrowserRouter>
  );
}

export default App;
