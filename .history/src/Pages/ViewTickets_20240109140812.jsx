import React from "react";

import "../Assets/Css/Styles.css";
import UserBadge from "../Components/UserBadge";

function ViewTickets() {
  const userName = "John";

  return (
    <div className="container bg-white">
      <ol class="list-group ">
        <li className="list-group-item d-flex justify-content-between align-items-start ">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Ac display is not working
                    </label>
                  </div>
                </div>
                <div className="row">
                  <p className="small text-wrap">
                    To install the getlead app either scan the QR code and
                    download the app or get a link to your mobile number
                  </p>
                </div>
                <div className="row">
                  <div className="col-5">
                    <UserBadge name={userName} />
                  </div>
                 
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <button
                    class="btn btn-outline-secondary btn-sm dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    High
                  </button>

                  <button
                    class="btn btn-outline-secondary btn-sm dropdown-toggle  "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pending
                  </button>
                  <div className="col-7 float-right">
                    <p className="text-muted small">
                      Created on Aug 15 10.30pm | Last Updated: 5 hours Ago
                    </p>
                  </div>
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
