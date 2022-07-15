import React from 'react'
import "./checkout.css"
export default function BtnCheck() {
  return (
    <div className="input-group mb-3">
    <div className='item'>   
    <div className='icon'>   
    <i  className="fa fa-id-card " aria-hidden="true"></i>
    <input type="text" class="form-control" placeholder="Card number" aria-label="Username" aria-describedby="basic-addon1"/>
  </div>
  </div>
  </div> 
  )
}
