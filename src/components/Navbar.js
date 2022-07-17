import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
export default function Navbar() {
//  let {btnmobile}=props;
// onClick(event) {
//   goToTop();
//   btnMobile();
// }
  const goToTop = () => {
    window.scrollTo({
        top: 5,
        behavior: "smooth",
    });
};

 const [mobile,setMobile]=useState(false);
 const btnMobile=()=>{
  setMobile(mobile=>!mobile)
 }
  return (
    <body  className={mobile && "mobile-nav-visible no-scroll"}>
    
      <div className="header">
        <div className="shell">
          <div className="header__inner">
            <div className="header__bar">
              <a className="logo" href="/">
                <h3>ViewsInsta</h3>
               
              </a>
              <button onClick={btnMobile } type="button" className="burger">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="header__menu">
              <nav className="nav">
                <ul>
                  <li className="">
                    <Link className="animated-link " to="/" onClick={() => { goToTop(); btnMobile();}}>
                        H
                      <span className="nav__char ad2">
                      </span>
                      <span className="nav__char ad3">
                        o
                      </span>
                      <span className="nav__char ad4">
                        m
                      </span>
                      <span className="nav__char ad5">
                        e
                      </span>
                    </Link>
                  </li>
                  <div className="nav__inner">
                    <li className="">
                      
                      <Link to="/buy-instagram-likes" onClick={() => { goToTop(); btnMobile();}}>Buy Instagram Likes</Link>
                    </li>
                    <li className="">
                      <Link to="/buy-instagram-followers"  onClick={() => { goToTop(); btnMobile();}}>
                        Buy Instagram Followers
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/buy-instagram-views" onClick={() => { goToTop(); btnMobile();}}>Buy Instagram Views</Link>
                    </li>
                  </div>
                  <li className="hidden-xs">
                    <Link className="animated-link" onClick={() => { goToTop(); btnMobile();}} to="/contact">
                      <span className="nav__char">
                        C
                      </span>
                      <span className="nav__char">
                        o
                      </span>
                      <span className="nav__char">
                        n
                      </span>
                      <span className="nav__char">
                        t
                      </span>
                      <span className="nav__char">
                        a
                      </span>
                      <span className="nav__char">
                        c
                      </span>
                      <span className="nav__char">
                        t
                      </span>
                      <span
                        className="nav__char is-empty"
                      >
                        {" "}
                      </span>
                      <span className="nav__char">
                        U
                      </span>
                      <span className="nav__char">
                        s
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="header__menu-footer">
                <ul>
                  <li>
                    <a
                      className="btn btn--small btn--tertiary btn--rounded"
                      href="/contact"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <strong>Contact Us</strong>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn--small btn--tertiary btn--rounded btn--transparent"
                      href="/blog"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <strong>Twicsy Blog</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    
  );
}
