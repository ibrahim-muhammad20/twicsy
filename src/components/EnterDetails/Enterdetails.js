// import './Enter.css';
import React, { useState } from "react";
import "./checkout.css";
import { Route, useNavigate } from "react-router-dom";

export default function Enterdetails(props) {
  const[disable,setDisable]=useState("");
  function dropDisable (event){
      setDisable(event.target.value);
    };
  let navigate = useNavigate();
  return (
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
                  <div onChange={props.Userbtn} className="form-group">
                    <img
                      className="input-icon"
                      src="../images2/instagram.svg"
                    />
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      defaultValue=""
                      value={props.username}
                      placeholder="Instagram username"
                    />
                  </div>
                  <div  onChange={dropDisable} className="form-group">
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
                      <input type="hidden" name="plan" defaultValue={props.number1} />
                      <button
                        onClick={props.dropClick}
                        type="button"
                        className={
                          props.drop ? "form-control active full" :
                         "form-control"
                        }
                      >
                        <strong>{props.likes}</strong> likes{" "}
                        <span className="alt">${props.prize}</span>
                      </button>
                      <div
                        className="dropdown-menu"
                        style={
                          props.drop ? { display: "block" }: 
                          { display: "none" }
                        }
                      >
                        <a href="#" data-value={11} onClick={props.func1} className={props.number1==11 && 'selected'}>
                          <span className="desc">
                            <strong>50</strong> likes{" "}
                          </span>
                          <span className="alt">$1.47</span>
                        </a>
                        <a href="#" data-value={12} onClick={props.func2} className={props.number1==12 && 'selected'}>
                          <span className="desc">
                            <strong>100</strong> likes{" "}
                          </span>
                          <span className="alt">$2.97</span>
                        </a>
                        <a href="#" data-value={13} onClick={props.func3} className={props.number1==13 && 'selected'}>
                          <span className="desc">
                            <strong>250</strong> likes{" "}
                          </span>
                          <span className="alt">$5.49</span>
                        </a>
                        <a href="#" data-value={14} onClick={props.func4} className={props.number1==14 && 'selected'}>
                          <span className="desc">
                            <strong>500</strong> likes{" "}
                          </span>
                          <span className="alt">$7.99</span>
                        </a>
                        <a href="#" data-value={15} onClick={props.func6} className={props.number1==15 && 'selected'}>
                          <span className="desc">
                            <strong>1000</strong> likes{" "}
                          </span>
                          <span className="alt">$12.99</span>
                        </a>
                        <a href="#" data-value={16} onClick={props.func6} className={props.number1==16 && 'selected'}>
                          <span className="desc">
                            <strong>2500</strong> likes{" "}
                          </span>
                          <span className="alt">$28.99</span>
                        </a>
                        <a href="#" data-value={17} onClick={props.func7} className={props.number1==17 && 'selected'}>
                          <span className="desc">
                            <strong>5000</strong> likes{" "}
                          </span>
                          <span className="alt">$49.99</span>
                        </a>
                        <a href="#" data-value={18} onClick={props.func8} className={props.number1==18 && 'selected'}>
                          <span className="desc">
                            <strong>10000</strong> likes{" "}
                          </span>
                          <span className="alt">$88.99</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mar-opt checkbox">
                      <input id="marCheck" type="checkbox" name="mailopt" />
                      <label htmlFor="marCheck">
                        <span >
                          Send me special promotions and discounts
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="button-group">
                  
                  <button onClick={() => {navigate(`checkout`)}}  type="submit" className="btn btn-block" disabled={disable=="" && "disabled"}>
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
              <p >
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
  );
}
