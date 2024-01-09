import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ticketIcon from "../Assets//Images/Layer_1.jpg"
import si

function SideBar() {
  return (
    <div class="container-fluid sideBg">
      <div class="row">
        <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar ">
          <div class="position-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <i class="fas fa-home"></i> 
                </a>
              </li>
              <li class="nav-item">
              <a className="nav-link active" href="#">
              <img src={ticketIcon} alt="Home Icon" className="icon" />
              </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-cogs"></i> 
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
