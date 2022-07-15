import "./checkout.css"
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
export default function EnterNavbar() {
  return (
    <div id="f1">
      
       <div className="header ">
    <div className="contain">
      <Link to="/" className="back">
        <span style={{color:"#0A7E7E"}} className="hidden-xs">Back</span>
      </Link>
      <a href="/" className="logo">
        <img className="img"src="../images2/logo.svg" alt="Twicsy" />
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
