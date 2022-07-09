// import "./Enter.css";
import React from 'react'

export default function EnterNavbar() {
  return (
    <div>
       <div className="header ">
    <div className="contain">
      <a href="https://twicsy.com/buy-instagram-likes" className="back">
        <span className="hidden-xs">Back</span>
      </a>
      <a href="/" className="logo">
        <img className="img2"src="../images2/logo.svg" alt="Twicsy" />
      </a>
    </div>
    <div className="progress">
      <div className="bar" />
      <div className="value" style={{ width: "25%" }} />
    </div>
    <div id="alerts"></div>
  </div>
    </div>
  )
}
