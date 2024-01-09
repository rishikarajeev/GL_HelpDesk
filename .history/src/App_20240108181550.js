import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewTickets from "./Pages/ViewTickets";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route path="/admin/dashboard" component={Dashboard} />
              <Route path="/admin/users" component={Users} />
              <Route path="/admin/settings" component={Settings} />
            </Switch>
          </main>
          <Routes>
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
