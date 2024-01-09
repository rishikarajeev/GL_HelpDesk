import React from "react";
import column_icon from "../Assets/Images/fluent_column-triple-20-regular.png";
import list_icon from "../Assets/Images/ph_list-bullets-light.png";
import search_icon from "../Assets/Images/ri_search-line.png";
import menu_icon from "../Assets/Images/ep_menu.png";
import filter_icon from "../Assets/Images/cil_filter.png";
import notificatn_icon from "../Assets/Images/Group 10.png";
import user_icon from "../Assets/Images/ooui_user-avatar-outline.png";

function Header() {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div className="row">
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
            <div class="col-md-auto"></div>
            <div className="col col-lg-2 text-right">
              <img src={menu_icon} alt="Local Icon" className="img-thumbnail" />
              <img
                src={notificatn_icon}
                alt="Local Icon"
                className="img-thumbnail"
              />
              <img src={user_icon} alt="Local Icon" className="img-thumbnail" />
              <button
                class="btn btn-outline-secondary btn-sm dropdown-toggle "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sharun Das
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
