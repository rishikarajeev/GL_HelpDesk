import React from "react";
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.png";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import filter_icon from "../Assets/Images/cil_filter.png";

function Header() {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
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
          <div className="row-xl">
            <div className="col">
            <div className="row">
            <a class="navbar-brand" href="#">
              Welcome{" "}
            </a>
              </div>
              <div className="row">
              <span>Lets build your workflow in few steps</span>
                </div>

            </div>
            <div className="col">
            <img src={search_icon} alt="Local Icon" className="img-thumbnail" />
              <img src={filter_icon} alt="Local Icon" className="img-thumbnail" />
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
      </nav>
    </div>
  );
}

export default Header;
