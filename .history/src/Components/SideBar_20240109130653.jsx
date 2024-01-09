import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import ticketIcon from "../Assets//Images/Layer_1.png"
import  "../Assets/Css/Styles.css"

function SideBar() {
  return (
    <div class="container-fluid p-5   ">
      <div class="row">
        <nav id="sidebar" class=" sidebar ">
          <div class="position-sticky sideBg">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  <i class="fas fa-home"></i> 
                </a>
              </li>
              <li class="nav-item  selectedColor" >
              <a className="nav-link active" href="/showtickets">
              <img src={ticketIcon} alt="Home Icon" className="icon" />
              </a>
              </li>
              <li class="nav-item  selectedColor" >
              <a className="nav-link active" href="#">
              <img src={ticketIcon} alt="Home Icon" className="icon" />
              </a>
              </li>
              <li class="nav-item  selectedColor" >
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
