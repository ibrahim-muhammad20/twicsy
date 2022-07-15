// import './Enter.css';
import React,{useState} from 'react'
import "./checkout.css"
import {useNavigate} from 'react-router-dom'
export default function Enterdetails() {
  const [drop,setDrop]=useState(false);
  const [b1,setb1]=useState(0);
  const [b2,setb2]=useState(0);
  const [b3,setb3]=useState(0);
  const [b4,setb4]=useState(0);
  const [b5,setb5]=useState(0);
  const [b6,setb6]=useState(0);
  const dropClick=()=>{
    setDrop(drop=>!drop);
  }
  const b1Click=()=>{
    setb1(11);
  }
  const b2Click=()=>{
    setb2(12);
  }
  const b3Click=()=>{
    setb3(13);
  }
  const b4Click=()=>{
    setb1(14);
  }
  const b5Click=()=>{
    setb1(15);
  }
  const b6Click=()=>{
    setb1(16);
  }
  let navigate = useNavigate();
  return (
    <div id="f1">
      
  {/* Hello world */}
  
  
  <div className="container-lg step1">
    <div id="f1"className="checkflex">
      <div id="f1" className="flex-c1">
        <div id="f1" className="box">
          <div id="f1" className="heading">
            <div className="title">Get started</div>
            <hr />
          </div>
          <div id="f1" className="body">
            <form style={{background: "#0A7E7E"}}  id=" f1 frmDetails" className="form  " method="POST" action="">
              <input type="hidden" name="user_id" defaultValue="" />
              <input
                type="hidden"
                name="crumb"
                defaultValue="KBGn5YwWIfeMU6fXb-BD3Q9vjh3rA3gGaMY_gWUBSkO"
              />
              <div className="alerts"></div>
              <div className="form-group">
                <img
                  className="input-icon"
                  src="../images2/instagram.svg"
                />
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  defaultValue=""
                  placeholder="Instagram username"
                />
              </div>
              <div className="form-group">
                <img className="input-icon" src="../images2/at.svg" />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  defaultValue=""
                  placeholder="Email address"
                />
              </div>
              <div className="form-group">
                <img
                  className="input-icon pusht"
                  src="../images2/heart.svg"
                />
                <div className="selector">
                  <input type="hidden" name="plan" defaultValue={b1?11:
                                                                 b2?12:
                                                                 b3?13:
                                                                 b4?14:
                                                                 b5?15:
                                                                 b6?16:11} />
                  <button onClick={dropClick} type="button" className={drop?"form-control active":"form-control"}>
                    <strong>50</strong> likes <span className="alt">$1.47</span>
                  </button>
                  <div className="dropdown-menu" style={drop?{display: "block"}:{display: "none"}}>
                    <a href="#" onClick={b1Click} data-value={11} className={b1?"selected":" "}>
                      <span className="desc">
                        <strong>50</strong> likes{" "}
                      </span>
                      <span className="alt">$1.47</span>
                    </a>
                    <a href="#"  data-value={12} className={b2?"selected":" "}>
                      <span className="desc">
                        <strong>100</strong> likes{" "}
                      </span>
                      <span className="alt">$2.97</span>
                    </a>
                    <a href="#" onClick={b3Click} data-value={13} className={b3?"selected":" "}>
                      <span className="desc">
                        <strong>250</strong> likes{" "}
                      </span>
                      <span className="alt">$5.49</span>
                    </a>
                    <a href="#" onClick={b4Click} data-value={14} className={b4?"selected":" "}>
                      <span className="desc">
                        <strong>500</strong> likes{" "}
                      </span>
                      <span className="alt">$7.99</span>
                    </a>
                    <a href="#" onClick={b5Click} data-value={15} className={b5?"selected":" "}>
                      <span className="desc">
                        <strong>1000</strong> likes{" "}
                      </span>
                      <span className="alt">$12.99</span>
                    </a>
                    <a href="#" onClick={b6Click} data-value={16} className={b6?"selected":" "}>
                      <span className="desc">
                        <strong>2500</strong> likes{" "}
                      </span>
                      <span className="alt">$28.99</span>
                    </a>
                    <a href="#" data-value={17}>
                      <span className="desc">
                        <strong>5000</strong> likes{" "}
                      </span>
                      <span className="alt">$49.99</span>
                    </a>
                    <a href="#" data-value={18}>
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
                    <span style={{color:"white"}}>Send me special promotions and discounts</span>
                  </label>
                </div>
              </div>
              <div className="button-group">
                <button onClick={() => {navigate('checkout')}}  type="submit" className="btn btn-block" disabled="">
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
          <p style={{color:"white"}}>
            Great service, very nice. Respond on time and also the delivery was
            very fast. Thanks and will order again.
          </p>
          <div className="stars">
            <i className="fas fa-star" aria-hidden="true" />
            <i className="fas fa-star" aria-hidden="true" />
            <i className="fas fa-star" aria-hidden="true" />
            <i className="fas fa-star" aria-hidden="true" />
            <i className="fas fa-star" aria-hidden="true" />
          </div>
          <div className="author">
            <strong style={{color:"white"}}>Evelyn R.</strong>
          </div>
        </div>{" "}
      </div>
    </div>
  </div>


    </div>
  )
}
