import React, { useState } from 'react'
// import "./checkout.css"
import {  useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
export default function EnterF(props) {
  
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
     <Link to="/buy-instagram-followers" className="back">
       <span style={{color:"#0A7E7E"}} className="hidden-xs">Back</span>
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
                  style={{ background: "#0A7E7E" }}
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
                  <div onChange={props.Userbtnf} className="form-group">
                    <img
                      className="input-icon"
                      src="../images2/instagram.svg"
                    />
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      defaultValue=""
                      value={props.usernamef}
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
                      <input type="hidden" name="plan" defaultValue={props.number2} />
                      <button
                        onClick={props.dropClickf}
                        type="button"
                        className={
                          props.dropf ? "form-control active full" :
                         "form-control"
                        }
                      >
                        <strong>{props.followers}</strong> followers{" "}
                        <span className="alt">${props.prizef}</span>
                      </button>
                      <div
                        className="dropdown-menu"
                        style={
                          props.dropf ? { display: "block" }: 
                          { display: "none" }
                        }
                      >
                        <a href="#" data-value={11} onClick={props.func1f} className={props.number2==11 && 'selected'}>
                          <span className="desc">
                            <strong>100</strong> followers{" "}
                          </span>
                          <span className="alt">$2.97</span>
                        </a>
                        <a href="#" data-value={12} onClick={props.func2f} className={props.number2==12 && 'selected'}>
                          <span className="desc">
                            <strong>250</strong> followers{" "}
                          </span>
                          <span className="alt">$5.49</span>
                        </a>
                        <a href="#" data-value={13} onClick={props.func3f} className={props.number2==13 && 'selected'}>
                          <span className="desc">
                            <strong>500</strong> followers{" "}
                          </span>
                          <span className="alt">$7.99</span>
                        </a>
                        <a href="#" data-value={14} onClick={props.func4f} className={props.number2==14 && 'selected'}>
                        <span className="desc">
                        <strong>1000</strong> followers{" "}
                        </span>
                        <span className="alt">$12.99</span>
                        </a>
                        <a href="#" data-value={15} onClick={props.func5f} className={props.number2==15 && 'selected'}>
                        <span className="desc">
                            <strong>2500</strong> followers{" "}
                        </span>
                        <span className="alt">$28.99</span>
                        </a>
                        <a href="#" data-value={16} onClick={props.func6f} className={props.number2==16 && 'selected'}>
                        <span className="desc">
                            <strong>5000</strong> followers{" "}
                          </span>
                          <span className="alt">$49.99</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mar-opt checkbox">
                      <input id="marCheck" type="checkbox" name="mailopt" />
                      <label htmlFor="marCheck">
                        <span style={{ color: "white" }}>
                          Send me special promotions and discounts
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="button-group">
                  
                  <button onClick={() => {navigate(`checkoutf`)}}  type="submit" className="btn btn-block" disabled={disable=="" && "disabled"}>
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
              <p style={{ color: "white" }}>
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
                <strong style={{ color: "white" }}>Evelyn R.</strong>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
