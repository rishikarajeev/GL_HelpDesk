import React from "react";

import "../Assets/Css/Styles.css";
import UserBadge from "../Components/UserBadge";
import Header from "../Components/Header";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function ViewTickets() {
  const userName = "John";

  return (
   
    <div className="container bg-white ">
  
    <ol className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="row">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Ac display is not working
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                <p className="small text-wrap">
                  To install the getlead app either scan the QR code and
                  download the app or get a link to your mobile number
                </p>
                </div>
                <div className="col-2 t">
                <button
                  className="btn btn-outline-secondary btn-sm dropdown-toggle w-auto text-end"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  High
                </button>
                </div>
  
              </div>
             
            </div>
            <div className="col-2">
          
                <button
                  className="btn btn-outline-secondary btn-sm dropdown-toggle w-auto text-end"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  High
                </button>
  
               

            </div>
            <div className="row">
                <div className="col-5">
                  <UserBadge name={userName} />
                </div>
                <div className="col-7 text-end">
                  <p className="text-muted small">
                    Created on Aug 15 10.30pm | Last Updated: 5 hours Ago
                  </p>
                </div>
              </div>
          </div>
        </div>
      </li>

    </ol>
  </div>
  
  );
}

export default ViewTickets;
