import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ticketIcon from "../Assets/Images/Layer_1.png";
import logo from "../Assets/Images/logo.png";
import profile from "../Assets/Images/profile_icon.png";
import filemanagr from "../Assets/Images/Frame.png";
import homeIcon from "../Assets/Images/el_home-alt.png";
import "../Assets/Css/Styles.css";

function SideBar() {
  const [activeIcon, setActiveIcon] = useState("home"); // Set the initial active icon

  return (
    <Navbar expand="lg" variant="dark" className="sideBg p  h-100">
      <Navbar.Toggle aria-controls="sidebar" className="order-0 ml-auto" />
      <Navbar.Collapse id="sidebar">
        <Nav className="flex-column ms-auto sideBg">
          <Nav.Item
            className={`nav-item mb-5 ${
              activeIcon === "logo" ? "selectedColor" : ""
            }`}
          >
            <Nav.Link
              className="nav-link"
              onClick={() => setActiveIcon("logo")}
              href="/"
            >
              <img src={logo} alt="Home Icon" className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            className={`nav-item p-2 ${
              activeIcon === "home" ? "selectedColor" : ""
            }`}
          >
            <Nav.Link
              className="nav-link text-white"
              onClick={() => setActiveIcon("home")}
              href="/home"
            >
              <img src={homeIcon} alt="Home Icon" className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            className={`nav-item p-2 ${
              activeIcon === "tickets" ? "selectedColor" : ""
            }`}
          >
            <Nav.Link
              className="nav-link"
              onClick={() => setActiveIcon("tickets")}
              href="/showtickets"
            >
              <img src={ticketIcon} alt="Home Icon" className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            className={`nav-item p-2 ${
              activeIcon === "file" ? "selectedColor" : ""
            }`}
          >
            <Nav.Link
              className="nav-link"
              onClick={() => setActiveIcon("file")}
              href="#"
            >
              <img src={filemanagr} alt="Home Icon" className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            className={`nav-item p-2 ${
              activeIcon === "profile" ? "selectedColor" : ""
            }`}
          >
            <Nav.Link
              className="nav-link"
              onClick={() => setActiveIcon("profile")}
              href="#"
            >
              <img src={profile} alt="Home Icon" className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            className={`nav-item p-2 ${
              activeIcon === "settings" ? "selectedColor" : ""
            }`}
          >
            <Nav.Link
              className="nav-link text-white"
              onClick={() => setActiveIcon("settings")}
              href="#"
            >
              <i className="fas fa-cogs"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SideBar;
