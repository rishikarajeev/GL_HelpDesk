import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
impor

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
