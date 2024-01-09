import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/showtickets" element={<ViewTickets />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
