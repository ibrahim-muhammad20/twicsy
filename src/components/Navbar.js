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
                <svg
                  width="135"
                  height="28"
                  viewBox="0 0 135 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.881 22.5855H65.6515V7.76684H70.5841V4.19171H57V7.76684H61.881V22.5855Z"
                    fill="#0A7E7E"
                  ></path>
                  <path
                    d="M81.5359 22.5855H85.0481L89.3093 9.63213H85.513L83.0854 17.9223L80.4512 9.63213H77.7396L75.1312 17.9223L72.6778 9.63213H68.9073L73.1943 22.5855H76.7066L79.1083 15.2021L81.5359 22.5855Z"
                    fill="#0A7E7E"
                  ></path>
                  <path
                    d="M94.6501 5.25389C94.6501 4.01036 93.6429 3 92.3775 3C91.1637 3 90.1307 4.01036 90.1307 5.25389C90.1307 6.49741 91.1637 7.50777 92.3775 7.50777C93.6429 7.50777 94.6501 6.49741 94.6501 5.25389ZM90.6214 22.5855H94.1594V9.63213H90.6214V22.5855Z"
                    fill="#0A7E7E"
                  ></path>
                  <path
                    d="M109.178 19.1399L106.105 17.4819C105.589 18.6736 104.478 19.5544 103.058 19.5544C101.198 19.5544 99.7779 18.1036 99.7779 16.1088C99.7779 14.114 101.198 12.6632 103.058 12.6632C104.478 12.6632 105.589 13.544 106.105 14.7358L109.178 13.0777C108.068 10.8497 105.744 9.34715 103.058 9.34715C99.2355 9.34715 96.214 12.1969 96.214 16.1088C96.214 20.0207 99.2355 22.8705 103.058 22.8705C105.744 22.8705 108.068 21.3679 109.178 19.1399Z"
                    fill="#0A7E7E"
                  ></path>
                  <path
                    d="M120.17 18.6477C120.17 16.3938 118.75 15.2539 116.425 14.6321L115.212 14.2694C114.127 13.9845 113.946 13.544 113.946 13.1554C113.946 12.5596 114.618 12.2746 115.237 12.2746C116.09 12.2746 116.839 12.6632 117.433 13.4145L119.757 11.5233C118.775 10.0984 117.252 9.34715 115.289 9.34715C112.552 9.34715 110.485 10.8756 110.434 13.2591C110.382 15.2539 111.622 16.7824 113.998 17.4041L114.953 17.6373C116.374 18.0259 116.684 18.3368 116.684 18.8808C116.684 19.5285 115.986 19.8135 115.263 19.8135C114.024 19.8135 112.939 19.2694 112.371 18.3109L109.943 20.3834C111.054 22.0674 112.991 22.8705 115.263 22.8705C118.026 22.8705 120.17 21.1606 120.17 18.6477Z"
                    fill="#0A7E7E"
                  ></path>
                  <path
                    d="M126.891 28L135 9.63213H131.1L127.666 18.0259L124.205 9.63213H120.331L125.755 21.8601L123.043 28H126.891Z"
                    fill="#0A7E7E"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.405 23.7737V14.2355L29.6376 16.1432C31.0902 17.0005 32.9628 16.5179 33.8202 15.0652C34.6775 13.6126 34.1948 11.74 32.7422 10.8827L24.9355 6.27546C24.0155 5.7325 22.8787 5.7097 21.9376 6.21534L13.3631 10.8225C11.8772 11.6209 11.3199 13.4727 12.1183 14.9585C12.9167 16.4444 14.7684 17.0017 16.2543 16.2034L20.7194 13.8042C20.7164 13.8578 20.7148 13.9118 20.7148 13.9662V23.5176C19.3787 24.6184 17.6984 25.2555 15.9322 25.2957C13.5345 25.3503 11.245 24.2988 9.72396 22.4445L1.76966 12.7477C-0.962498 9.41696 -0.477285 4.50205 2.85341 1.7699C6.1841 -0.962256 11.099 -0.477044 13.8312 2.85365L15.4667 4.84754L16.7471 3.13321C18.2922 1.06431 20.6673 -0.0189852 23.0655 0.000251815C25.3253 -0.00335165 27.5683 0.970196 29.1133 2.85365L30.7489 4.84754L32.0292 3.13321C34.6069 -0.318364 39.4947 -1.02673 42.9463 1.55103C46.3978 4.12879 47.1062 9.01653 44.5284 12.4681L37.2865 22.165C35.8514 24.0865 33.6121 25.2411 31.2144 25.2957C29.469 25.3354 27.781 24.7891 26.405 23.7737Z"
                    fill="#FF553C"
                  ></path>
                </svg>
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
