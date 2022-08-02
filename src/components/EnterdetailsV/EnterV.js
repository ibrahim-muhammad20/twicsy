import React, { useState } from 'react'
// import "./checkout.css"
import {  useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
export default function EnterV(props) {
  var textstyle = {
    padding:"18px",
    color: "#0A7E7E"
  };
    // this disable is used for button
    const[disable,setDisable]=useState("");
    function dropDisable (event){
        setDisable(event.target.value);
      };
    let navigate = useNavigate();
  return (
    // Navbar
    <div>
        <div id="f1">
      
      <div className="header ">
   <div className="contain">
     <Link to="/buy-instagram-views" className="back">
       <span  className="hidden-xs">Back</span>
     </Link>
     <a href="/" className="logo">
     <img className='img' src="./logo/VI.png" alt="" />
     </a>
   </div>
   <div className="progress">
     <div className="bar" />
     <div className="value" style={{ width: "25%" }} />
   </div>
   <div id="alerts"></div>
 </div>
   </div>
    {/* Details */}
   <div id="f1">
      {/* Hello world */}

      <div className="container-lg step1">
        <div id="f1" className="checkflex">
          <div id="f1" className="flex-c1">
            <div id="f1" className="box">
              <div id="f1" className="heading">
                <div className="title">Get started</div>
                <hr />
              </div>
              <div id="f1" className="body">
                <form
                  // style={{ background: "#0A7E7E" }}
                  id=" f1 frmDetails"
                  className="form  "
                  method="POST"
                  action=""
                >
                  <input type="hidden" name="user_id" defaultValue="" />
                  <input
                    type="hidden"
                    name="crumb"
                    defaultValue="KBGn5YwWIfeMU6fXb-BD3Q9vjh3rA3gGaMY_gWUBSkO"
                  />
                  <div className="alerts"></div>
                  <div onChange={props.Userbtnv} className="form-group">
                    <img
                      className="input-icon"
                      src="../images2/instagram.svg"
                    />
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      defaultValue=""
                      value={props.usernamev}
                      placeholder="Instagram username"
                    />
                  </div>
                  <div onChange={dropDisable} className="form-group">
                    <img className="input-icon" src="../images2/at.svg" />
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      value={disable}
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group">
                    <img
                      className="input-icon pusht"
                      src="../images2/heart.svg"
                    />
                    <div className=" selector selected">
                      <input type="hidden" name="plan" defaultValue={props.number3} />
                      <button
                        onClick={props.dropClickv}
                        type="button"
                        className={
                          props.dropv ? "form-control active full" :
                         "form-control"
                        }
                      >
                        <strong>{props.views}</strong> views{" "}
                        <span className="alt">${props.prizev}</span>
                      </button>
                      <div
                        className="dropdown-menu"
                        style={
                          props.dropv ? { display: "block" }: 
                          { display: "none" }
                        }
                      >
                        <a href="#" data-value={11} onClick={props.func1v} className={props.number3==11 && 'selected'}>
                        <span className="desc">
                         <strong>500</strong> views{" "}
                        </span>
                        <span className="alt">$1.99</span>
                        </a>
                        <a href="#" data-value={12} onClick={props.func2v} className={props.number3==12 && 'selected'}>
                          <span className="desc">
                          <strong>2500</strong> views{" "}
                          </span>
                          <span className="alt">$6.99</span>
                        </a>
                        <a href="#" data-value={13} onClick={props.func3v} className={props.number3==13 && 'selected'}>
                          <span className="desc">
                          <strong>5000</strong> views{" "}
                          </span>
                          <span className="alt">$14.99</span>
                        </a>
                        <a href="#" data-value={14} onClick={props.func4v} className={props.number3==14 && 'selected'}>
                        <span className="desc">
                        <strong>10000</strong> views{" "}
                        </span>
                        <span className="alt">$24.99</span>
                        </a>
                        <a href="#" data-value={15} onClick={props.func5v} className={props.number3==15 && 'selected'}>
                        <span className="desc">
                        <strong>25000</strong> views{" "}
                        </span>
                        <span className="alt">$49.99</span>
                        </a>
                        <a href="#" data-value={16} onClick={props.func6v} className={props.number3==16 && 'selected'}>
                        <span className="desc">
                        <strong>50000</strong> views{" "}
                          </span>
                          <span className="alt">$74.99</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mar-opt checkbox">
                      <input id="marCheck" type="checkbox" name="mailopt" />
                      <label htmlFor="marCheck">
                        <span>
                          Send me special promotions and discounts
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="button-group">
                  
                  <button onClick={() => {navigate(`checkoutv`)}}  type="submit" className="btn btn-block" disabled={disable=="" && "disabled"}>
                  Continue
                </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-c2">
            <div className="user-review">
              <div className="img">
                <img src="../images2/account-2.png" />
              </div>
              <p />
              <p>
                Great service, very nice. Respond on time and also the delivery
                was very fast. Thanks and will order again.
              </p>
              <div className="stars">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
              </div>
              <div className="author">
                <strong>Evelyn R.</strong>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
