import React from 'react'
import column_icon from"../Assets/Images/fluent_column-triple-20-regular.png"
import list_icon from"../Assets/Images/ph_list-bullets-light.png"

function Header() {
  return (
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className='row'>
      <a class="navbar-brand" href="#">Welcome </a>
      <span>Lets build your workflow in few steps</span>
    <div className='col'>
     
    <img src={colu} alt="Local Icon" className="img-fluid" />
    <img src={list_icon} alt="Local Icon" className="img-fluid" />
    </div>
      
      </div>
      <div className='row'></div>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
     
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Header