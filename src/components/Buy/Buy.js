import React from 'react'
import "./buy.css"
export default function Buy() {
  return (
    <div>
      <div className="header ">
        <div className="contain">
      
          <a href="https://twicsy.com/buy-instagram-likes" className="back">
            <span className="hidden-xs">Back</span>
          </a>
      
      
          <a href="/" className="logo">
            <img src="./images/logo.svg" alt="Twicsy"/>
          </a>
      
        </div>
      
        <div className="progress">
          <div className="bar"></div>
          <div className="value" style={{width:"25%"}}></div>
        </div>
      
        <div id="alerts">
        </div>
      </div>
    </div>
  )
}
