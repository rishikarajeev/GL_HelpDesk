import React from "react";
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.png";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import filter_icon from "../Assets/Images/cil_filter.png";

function Header() {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="row p-5">
            <div className="col">
              <a class="navbar-brand" href="#">
                Welcome{" "}
              </a>
              <span>Lets build your workflow in few steps</span>
            </div>
            <div className="col">
              <div className="col">
                <img
                  src={search_icon}
                  alt="Local Icon"
                  className="img-thumbnail"
                />
                <img
                  src={filter_icon}
                  alt="Local Icon"
                  className="img-thumbnail"
                />
                <button
                  class="btn btn-outline-secondary btn-sm dropdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By Newest
                </button>
              </div>
            </div>
            <div className="container fluid">
              <div className="row">
                <div className="col">
                  <img
                    src={column_icon}
                    alt="Local Icon"
                    className="img-thumbnail"
                  />
                  <img src={list_icon} className="img-thumbnail" />
                </div>
                <div className="col">
                  <div class="form-check form-switch">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Show tickets created by me
                    </label>

                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
                <div className="col">
                  <img
                    src={search_icon}
                    alt="Local Icon"
                    className="img-thumbnail"
                  />
                  <img
                    src={filter_icon}
                    alt="Local Icon"
                    className="img-thumbnail"
                  />
                  <button
                    class="btn btn-outline-secondary btn-sm dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By Newest
                  </button>
                </div>
              </div>
            </div>
          </div>
        
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-end">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
