import React from "react";
import ticketIcon from "../Assets//Images/Layer_1.png";
import logo from "../Assets//Images/logo.png";
import profile from "../Assets//Images/profile_icon.png";
import filemanagr from "../Assets//Images/Frame.png";
import "../Assets/Css/Styles.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function SideBar() {
  return (
    <Navbar expand="lg" variant="dark" className="sideBg d-flex flex-column h-100 order-0">
    <Navbar.Toggle aria-controls="sidebar"  c />
    <Navbar.Collapse id="sidebar">
      <Nav className="flex-column ms-auto">
        <Nav.Item className="nav-item mb-5">
          <Nav.Link className="nav-link active" href="/">
            <img src={logo} alt="Home Icon" className="icon" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link active text-white" href="/">
            <i className="fas fa-home"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item selectedColor">
          <Nav.Link className="nav-link active" href="/showtickets">
            <img src={ticketIcon} alt="Home Icon" className="icon" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link active" href="#">
            <img src={filemanagr} alt="Home Icon" className="icon" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link active" href="#">
            <img src={profile} alt="Home Icon" className="icon" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link text-white" href="#">
            <i className="fas fa-cogs"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default SideBar;
