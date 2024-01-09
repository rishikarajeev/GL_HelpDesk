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
     
        <div className="row">
        <div className="col-1">
            <SideBar />
            </div>
            <div className="col-10">
            <Header/>
          
         </div>
       </div>
    
    </BrowserRouter>
  );
}

export default App;
