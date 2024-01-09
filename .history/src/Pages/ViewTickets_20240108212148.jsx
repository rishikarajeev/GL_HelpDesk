import React from 'react'

import "../Assets/Css/Styles.css"

function ViewTickets() {
  return (
    <div className='container'>

    
  <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
  <div class="container">
  <div className='row'>
  <div className='col-10'>
  <div className='row'>
  <div class="fw-bold">Ac display is not working</div>
  </div>
  <div className='row'>
  <p class="fs-6">To install the getlead app either</p>
    </div>
    <div className='row'>
        </div>
  </div>
  <div className='col-2'>
  <div class="fw-bold">Subheading</div>
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
   
  )
}

export default ViewTickets