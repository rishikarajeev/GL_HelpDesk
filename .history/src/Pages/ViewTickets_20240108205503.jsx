import React from 'react'

import "../Assets/Css/Styles.css"

function ViewTickets() {
  return (
    <div className='container'>

    
  <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div className='row'>
        <div className='col'>
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    </div>
    <div className='col'>
    <span class="badge bg-primary rounded-pill">14</span>
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