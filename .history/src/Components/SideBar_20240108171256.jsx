import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function SideBar() {
  return (
    <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <i class="fas fa-home"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-user"></i> Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-cogs"></i> Settings
              </a>
            </li>
            <!-- Add more sidebar items with icons as needed -->
          </ul>
        </div>
      </nav>

      <!-- Page content -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <!-- Your main content goes here -->
      </main>
    </div>
  </div>
  );
}

export default SideBar;
