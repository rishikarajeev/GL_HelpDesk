import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import ticketIcon from "../Assets//Images/Layer_1.png";
import logo from "../Assets//Images/logo.png";

import "../Assets/Css/Styles.css";

function SideBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark sideBg  d-flex flex-column h-100 ">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#sidebar"
        aria-controls="sidebar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="sidebar">
        <ul class="nav  flex-column align-items-start">
          <li class="nav-item">
            <a class="nav-link active" href="/">
              <i class="fas fa-home"></i>
            </a>
          </li>
          <li class="nav-item  selectedColor">
            <a className="nav-link active" href="/showtickets">
              <img src={ticketIcon} alt="Home Icon" className="icon" />
            </a>
          </li>
          <li class="nav-item  selectedColor">
            <a className="nav-link active" href="#">
              <img src={ticketIcon} alt="Home Icon" className="icon" />
            </a>
          </li>
          <li class="nav-item  selectedColor">
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
  );
}

export default SideBar;
