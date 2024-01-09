import React from "react";

import "../Assets/Css/Styles.css";
import UserBadge from "../Components/UserBadge";

function ViewTickets() {
  const userName = "John";

  return (
    <div className="container">
      <ol class="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <div className="row">
                  <div className="fw-bold">Ac display is not working</div>
                </div>
                <div className="row">
                  <p className="fs-6">
                    To install the getlead app either scan the QR code and
                    download the app or get a link to your mobile number
                  </p>
                </div>
                <div className="row">
                    <div className="col">
                  <UserBadge name={userName} />
                  </div>
                  <div className="col text">
           
                    <p className="text-muted small">
                      Created on Aug 15 10.30pm | Last Updated: 5 hours Ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-2">
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
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
      </ol>
    </div>
  );
}

export default ViewTickets;
