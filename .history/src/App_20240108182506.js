import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import SideBar from "./Components/SideBar";


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Ro
          <SideBar/>      
            <Routes>
            <Route path="/showtickets" element={<ViewTickets />}></Route>
            </Routes>
        
        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
