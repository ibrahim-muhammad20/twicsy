import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LikeList2 from './LikeList2';
import LikesInfo from './LikesInfo';
import LikesList from './LikesList';
export default function Hero_Likes() {
  const [question,setQuestion]=useState(false);
  const [like,setLike]=useState(true);
  // const [like2,setLike2]=useState(false);
  const btnQuestion=()=>{
    setQuestion(question=>!question)
  }
  const btnLike=()=>{
    setLike(like=>!like)
  }
  
  return (
    <div>
          <div
  className="animate in-view is-animated"
  data-delay={0}
  data-duration={400}
  data-animation="fade-up"
>
  <div className="hero hero--plans is-reverse">
    <div className="shell">
      <div className="hero__inner">
        <div className="hero__aside">
          <div className="phone">
            <div className="phone__inner">
              <div className="phone__display">
                <div className="phone__battery">
                  <img
                    className="phone__confetti-1"
                    src="/images/phone-battery.png"
                  />
                </div>
                <div className="phone__avatar">
                  <div className="phone__confetti">
                    <img
                      className="phone__confetti-1"
                      src="/images/confetti-img-1.svg"
                    />
                    <img
                      className="phone__confetti-2"
                      src="/images/confetti-img-2.svg"
                    />
                    <img
                      className="phone__confetti-3"
                      src="/images/confetti-img-3.svg"
                    />
                    <img
                      className="phone__confetti-4"
                      src="/images/confetti-img-4.svg"
                    />
                    <img
                      className="phone__confetti-5"
                      src="/images/confetti-img-5.svg"
                    />
                    <img
                      className="phone__confetti-6"
                      src="/images/confetti-img-6.svg"
                    />
                    <img
                      className="phone__confetti-7"
                      src="/images/confetti-img-7.svg"
                    />
                  </div>
                  <div className="phone__avatar-image">
                    <figure>
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "absolute",
                          inset: 0
                        }}
                      >
                        <img
                          sizes="100vw"
                          srcSet="./images/women.png, 
                          ./images/women.png, 
                          ./images/women.png, 
                          ./images/women.png, 
                          ./images/women.png, 
                          ./images/women.png, 
                          ./images/women.png, 
                          ./images/women.png"
                          src="./images/women.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%"
                          }}
                        />
                        <noscript />
                      </span>
                    </figure>
                  </div>
                  <ul className="phone__avatar-messages">
                    <li />
                    <li />
                  </ul>
                </div>
                <ul className="phone__messages">
                  <li style={{ transitionDelay: "0s" }}>
                    <div className="phone__message">
                      <figure>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                            />
                          </span>
                          <img
                            srcSet="./images/100-emoji.png, 
                            ./images/100-emoji.png"
                            src="./images/100-emoji.png"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%"
                            }}
                          />
                          <noscript />
                        </span>
                      </figure>
                      Best IG Followers
                    </div>
                  </li>
                  <li style={{ transitionDelay: "0.4s" }}>
                    <div className="phone__message">
                      <figure>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                            />
                          </span>
                          <img
                            srcSet="./images/cowboy-emoji.png, 
                            ./images/cowboy-emoji.png"
                            src="./images/cowboy-emoji.png"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%"
                            }}
                          />
                          <noscript />
                        </span>
                      </figure>
                      Go viral with IG Views
                    </div>
                  </li>
                  <li style={{ transitionDelay: "0.8s" }}>
                    <div className="phone__message">
                      <figure>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                            />
                          </span>
                          <img
                            srcSet="./images/100-emoji.png,
                             ./images/100-emoji.png"
                            src="./images/100-emoji.png"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%"
                            }}
                          />
                          <noscript />
                        </span>
                      </figure>
                      IG Likes in Seconds
                    </div>
                  </li>
                </ul>
                <div className="phone__heart phone__heart--left">
                  <svg
                    className="svg-icon svg-icon--heart"
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.07974 16.7646L7.83097 15.5086C3.19714 11.3708 0.168091 8.58102 0.168091 5.15948C0.168091 2.37529 2.30925 0.214355 5.06715 0.214355C6.58671 0.214355 8.10062 0.934894 9.07974 2.10338C10.0588 0.934876 11.5728 0.214355 13.0923 0.214355C15.8502 0.214355 17.9914 2.37529 17.9914 5.15948C17.9914 8.58093 14.9623 11.3707 10.3285 15.5086L9.07974 16.7646Z"
                      fill="#FF553C"
                    />
                  </svg>
                </div>
                <div className="phone__heart phone__heart--right">
                  <svg
                    className="svg-icon svg-icon--heart"
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.07974 16.7646L7.83097 15.5086C3.19714 11.3708 0.168091 8.58102 0.168091 5.15948C0.168091 2.37529 2.30925 0.214355 5.06715 0.214355C6.58671 0.214355 8.10062 0.934894 9.07974 2.10338C10.0588 0.934876 11.5728 0.214355 13.0923 0.214355C15.8502 0.214355 17.9914 2.37529 17.9914 5.15948C17.9914 8.58093 14.9623 11.3707 10.3285 15.5086L9.07974 16.7646Z"
                      fill="#FF553C"
                    />
                  </svg>
                </div>
              </div>
              <div className="blobs blobs--red">
                <div className="blobs__holder">
                  <div className="blob blob--left">
                    <svg
                      width={274}
                      height={238}
                      viewBox="0 0 274 238"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="blob__body"
                        d="M143.663 232.92C121.673 233.098 100.832 223.313 87.1516 206.389L18.114 120.983C-6.45971 90.5833 -1.31022 46.3171 29.6158 22.1119C60.5418 -2.09334 105.533 2.92843 130.107 33.3283L142.312 48.4274L234.899 160.655L199.78 205.48C186.349 222.623 165.654 232.743 143.663 232.92Z"
                        fill="#FFB6AB"
                      />
                      <path
                        className="blob__face"
                        d="M41.3622 63.1121C50.1713 68.102 58.0068 60.72 56.272 52.8938M63.4911 47.3046C72.3002 52.2945 80.1356 44.9125 78.4008 37.0863M37.5951 78.3983C65.9042 85.4868 95.6536 65.5285 93.7198 39.3447"
                        stroke="#FF553C"
                        strokeWidth="4.92264"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="blob blob--middle">
                    <svg
                      width={349}
                      height={340}
                      viewBox="0 0 349 340"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="blob__body"
                        d="M105.043 246.657C87.2405 232.715 77.1338 229.278 76.529 207.517L73.7357 104.671C72.6492 65.5833 104.002 34.8709 143.764 36.0731C183.526 37.2753 216.64 69.9369 217.726 109.025L218.007 121.47L222.873 249.546L166.265 240.452C144.921 245.024 122.846 260.599 105.043 246.657Z"
                        fill="#FFB6AB"
                      />
                      <path
                        className="blob__face"
                        d="M125.413 62.6623C128.746 69.987 137.234 68.9011 139.775 63.0579M147.029 62.8369C150.362 70.1616 158.85 69.0758 161.391 63.2326M111.251 68.8341C126.143 86.6195 165.657 85.5081 176.648 67.7673"
                        stroke="#FF553C"
                        strokeWidth="3.91287"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="blob blob--right">
                    <svg
                      width={267}
                      height={234}
                      viewBox="0 0 267 234"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="blob__body"
                        d="M133.391 229.998C154.784 228.858 174.464 217.94 186.755 200.392L248.779 111.841C270.856 80.3216 263.202 36.8729 231.682 14.7958C200.163 -7.28138 156.714 0.373153 134.637 31.8927L123.671 47.5478L40.3528 164.021L77.1828 206.229C91.2684 222.372 111.997 231.137 133.391 229.998Z"
                        fill="#FFB6AB"
                      />
                      <path
                        className="blob__face"
                        d="M193.676 33.154C191.962 43.1321 201.56 48.0065 208.337 43.7251M216.04 48.6263C214.326 58.6044 223.925 63.4787 230.702 59.1974M179.498 44.6049C182.41 73.6423 202.78 82.5942 226.764 71.9121"
                        stroke="#FF553C"
                        strokeWidth="4.92264"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="blobs__arrow">
                    <svg
                      width={201}
                      height={223}
                      viewBox="0 0 201 223"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M115.745 4.20756C107.382 -0.390078 97.2256 -0.284367 88.9609 4.48632L13.6544 47.9557C0.604693 55.4885 -3.86772 72.1739 3.66503 85.2236C11.1978 98.2734 27.8832 102.746 40.9329 95.213L76.8 74.5093L76.8 206.435C76.8 215.197 88.2784 222.3 102.438 222.3C116.597 222.3 128.075 215.197 128.075 206.435L128.075 73.2558L160.413 91.0352C173.617 98.2947 190.205 93.476 197.465 80.2723C204.724 67.0686 199.906 50.4799 186.702 43.2204L115.745 4.20756Z"
                        fill="url(#paint0_linear_36_932)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M115.745 4.20756C107.382 -0.390078 97.2256 -0.284367 88.9609 4.48632L13.6544 47.9557C0.604693 55.4885 -3.86772 72.1739 3.66503 85.2236C11.1978 98.2734 27.8832 102.746 40.9329 95.213L76.8 74.5093L76.8 206.435C76.8 215.197 88.2784 222.3 102.438 222.3C116.597 222.3 128.075 215.197 128.075 206.435L128.075 73.2558L160.413 91.0352C173.617 98.2947 190.205 93.476 197.465 80.2723C204.724 67.0686 199.906 50.4799 186.702 43.2204L115.745 4.20756Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_36_932"
                          x1="188.471"
                          y1="270.615"
                          x2="-2.11774"
                          y2="132.631"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="#FFE8F6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__content">
          <div className="hero__text">
            <h1>
              Buy Instagram Likes <br /> with{" "}
              <span className="orange-highlight">Instant Delivery</span>
              <span role="img" aria-label="thunderbolt">
                ⚡
              </span>
            </h1>
            <p>
              At Twicsy, you can buy Instagram likes quickly, safely,
              <br className="hidden-xs" />
              and easily with just a few clicks. See our deals below!
            </p>
          </div>
          <div className="plans">
            <div className="plans__navigation">
              <button onClick={btnLike}
                type="button"
                className={like?"plans__navigation-button is-active":"plans__navigation-button"}
              >
                High Quality Likes
              </button>
              <button  onClick={btnLike} type="button" className={like?"plans__navigation-button": "plans__navigation-button is-active"}>
                Premium Likes
              </button>
              <div     className={question?"tooltip is-visible":"tooltip"}>
                <button onClick={btnQuestion} className="tooltip__btn" type="button">
                
                  <svg
                    className="svg-icon svg-icon--question"
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.07422 0C13.7664 0.00530795 17.5689 3.80778 17.5742 8.5C17.5742 13.1944 13.7686 17 9.07422 17C4.3798 17 0.574219 13.1944 0.574219 8.5C0.574219 3.80558 4.3798 0 9.07422 0ZM9.11011 11.0821C8.96907 11.0821 8.83024 11.1064 8.69361 11.1548C8.55698 11.2033 8.43577 11.2716 8.33 11.3598C8.22422 11.4479 8.14048 11.5559 8.07877 11.6837C8.01707 11.8115 7.98622 11.9592 7.98622 12.1267C7.98622 12.2941 8.01707 12.4418 8.07877 12.5696C8.14048 12.6974 8.22422 12.8054 8.33 12.8936C8.43577 12.9817 8.55698 13.05 8.69361 13.0985C8.83024 13.147 8.96907 13.1712 9.11011 13.1712C9.39218 13.1712 9.64781 13.0787 9.877 12.8936C10.1062 12.7084 10.2208 12.4528 10.2208 12.1267C10.2208 11.9592 10.1899 11.8115 10.1282 11.6837C10.0665 11.5559 9.98277 11.4479 9.877 11.3598C9.77122 11.2716 9.65222 11.2033 9.52 11.1548C9.38777 11.1064 9.25114 11.0821 9.11011 11.0821ZM9.29522 3.74378C8.95144 3.74378 8.62088 3.78124 8.30355 3.85617C7.98622 3.93109 7.6777 4.03026 7.378 4.15367C6.19422 4.56083 6.64192 6.22069 7.88523 5.79253C8.08068 5.72522 8.34763 5.63015 8.67377 5.542C8.6914 5.53319 8.71785 5.52657 8.75311 5.52217C8.78837 5.51776 8.81481 5.51115 8.83244 5.50233C8.98229 5.47589 9.12774 5.46267 9.26877 5.46267C9.57729 5.46267 9.82631 5.5398 10.0158 5.69406C10.2053 5.84831 10.3001 6.06207 10.3001 6.33533C10.3001 6.5557 10.2472 6.75183 10.1414 6.92372C10.0357 7.09561 9.90564 7.25869 9.75138 7.41294C9.59713 7.5672 9.42964 7.72367 9.24894 7.88233C9.06824 8.041 8.90076 8.21289 8.7465 8.398C8.59224 8.58311 8.46222 8.78806 8.35644 9.01283C8.25066 9.23761 8.19777 9.49985 8.19777 9.79956C8.19777 9.92296 8.20439 10.0398 8.21761 10.1499C8.23083 10.2601 8.25066 10.3769 8.27711 10.5003C8.97406 10.6469 9.56025 10.6469 10.0357 10.5003C10.1464 10.4662 10.1464 10.2855 10.0357 9.95822C10.0533 9.67615 10.1503 9.45357 10.3266 9.2905C10.5028 9.12743 10.688 8.96215 10.8819 8.79467C11.0494 8.65363 11.2124 8.50378 11.3711 8.34511C11.5298 8.18644 11.673 8.01015 11.8008 7.81622C11.9286 7.6223 12.0322 7.40633 12.1116 7.16833C12.1909 6.93033 12.2306 6.66148 12.2306 6.36178C12.2306 5.91222 12.1512 5.52217 11.9926 5.19161C11.8339 4.86106 11.6179 4.59 11.3447 4.37844C11.0714 4.16689 10.7585 4.00822 10.4059 3.90244C10.0533 3.79667 9.68307 3.74378 9.29522 3.74378Z"
                      fill="currentColor"
                    />
                  </svg>

                </button>
                
              </div>
            </div>
            {/* <div className="embla embla--alt slider-plans"> */}
             {like?<LikeList2/>:<LikesList/>}
           
            {/* </div> */}
            <div className="plans__actions">
              <div className="flex-row lg-cols-3 lg-align-center md-cols-3 md-align-center sm-cols-3 sm-align-center xs-cols-2 xs-justify-center">
                <div className="flex-col">
                  <div className="price">
                    <div className="price__top">
                      <strong>
                        <sup>$</sup>1.47
                      </strong>
                      <strike>$1.99</strike>
                    </div>
                    <div className="price__bottom">
                      <i />
                      You Saved <span>$0.52</span>
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <Link className="btn btn--block" to="/Enterdetails"
                  >
                    <span />
                    <span />
                    <span />
                    <strong>Buy Now</strong>
                  </Link>
                </div>
                <div className="flex-col hidden-xs">
                  <div className="reviews-trustpilot">
                    <div className="reviews__logo">
                      <div className="svg-image svg-image--trustpilot">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={108}
                          height="26.514"
                          viewBox="0 0 108 26.514"
                        >
                          <g id="trustpilot" transform="translate(-0.09 -2.09)">
                            <path
                              id="Path_1"
                              data-name="Path 1"
                              d="M28.476,11.486H39.4V13.52H35.1V24.986H32.742V13.52H28.458l.018-2.034Zm10.458,3.726H40.95V17.1h.036a2.375,2.375,0,0,1,.378-.774,2.992,2.992,0,0,1,.666-.684,2.946,2.946,0,0,1,.864-.5,2.515,2.515,0,0,1,.954-.2c.252,0,.432.018.522.018a1.575,1.575,0,0,0,.288.036v2.07a3.643,3.643,0,0,0-.468-.072,4.1,4.1,0,0,0-.468-.036,2.5,2.5,0,0,0-1.026.216,2.6,2.6,0,0,0-.846.63,3.413,3.413,0,0,0-.576,1.044,4.405,4.405,0,0,0-.216,1.44v4.644H38.9l.036-9.72Zm15.624,9.774H52.434V23.618H52.4a3.016,3.016,0,0,1-1.188,1.188,3.136,3.136,0,0,1-1.6.45,3.564,3.564,0,0,1-2.79-.954,4.173,4.173,0,0,1-.864-2.88v-6.21h2.16v5.994a2.554,2.554,0,0,0,.5,1.818,1.777,1.777,0,0,0,1.386.54,2.655,2.655,0,0,0,1.134-.216,1.956,1.956,0,0,0,.738-.558,2.189,2.189,0,0,0,.414-.846,4,4,0,0,0,.126-1.062v-5.67h2.16v9.774h-.018Zm3.672-3.132a1.7,1.7,0,0,0,.72,1.332,2.835,2.835,0,0,0,1.494.378,4.947,4.947,0,0,0,.684-.054,3.014,3.014,0,0,0,.72-.18,1.267,1.267,0,0,0,.558-.4.922.922,0,0,0,.2-.666.969.969,0,0,0-.306-.684,2.55,2.55,0,0,0-.72-.432,6.243,6.243,0,0,0-1.008-.27c-.378-.072-.756-.162-1.152-.252s-.792-.2-1.17-.324a3.353,3.353,0,0,1-1.008-.522,2.245,2.245,0,0,1-.7-.828,2.587,2.587,0,0,1-.27-1.242,2.129,2.129,0,0,1,.4-1.332,2.87,2.87,0,0,1,.99-.864,4.493,4.493,0,0,1,1.332-.468,7.626,7.626,0,0,1,1.386-.126,6.193,6.193,0,0,1,1.44.162,3.64,3.64,0,0,1,1.242.522,2.852,2.852,0,0,1,.918.936,3.242,3.242,0,0,1,.468,1.386H62.19a1.386,1.386,0,0,0-.7-1.044,2.9,2.9,0,0,0-1.278-.27c-.144,0-.342.018-.54.036a3.181,3.181,0,0,0-.594.144,1.408,1.408,0,0,0-.468.306.72.72,0,0,0-.2.522.791.791,0,0,0,.27.63,2.447,2.447,0,0,0,.72.414,6.243,6.243,0,0,0,1.008.27c.378.072.774.162,1.17.252s.774.2,1.152.324a3.153,3.153,0,0,1,1.008.522,2.6,2.6,0,0,1,.72.81,2.488,2.488,0,0,1,.27,1.206,2.624,2.624,0,0,1-.4,1.476,3.366,3.366,0,0,1-1.026.99,5.088,5.088,0,0,1-1.4.558,7.541,7.541,0,0,1-1.53.18,6.447,6.447,0,0,1-1.71-.216,4.355,4.355,0,0,1-1.368-.63,3.022,3.022,0,0,1-.9-1.062,3.468,3.468,0,0,1-.36-1.512h2.178v.018h.018Zm7.11-6.642h1.638V12.26h2.16v2.934h1.944v1.6H69.138v5.22a5.537,5.537,0,0,0,.036.594,1.248,1.248,0,0,0,.126.414.7.7,0,0,0,.306.252,1.605,1.605,0,0,0,.576.09,3.762,3.762,0,0,0,.45-.018,3.9,3.9,0,0,0,.45-.072V24.95q-.35.049-.7.072a4.472,4.472,0,0,1-.7.036A4.653,4.653,0,0,1,68.31,24.9a1.966,1.966,0,0,1-.81-.468,1.673,1.673,0,0,1-.4-.774,6.144,6.144,0,0,1-.126-1.08v-5.76H65.34v-1.6Zm7.254,0h2.034v1.332h.036a2.674,2.674,0,0,1,1.26-1.224,4.081,4.081,0,0,1,1.764-.378,4.435,4.435,0,0,1,2.016.414,3.782,3.782,0,0,1,1.422,1.116,4.655,4.655,0,0,1,.846,1.656,7.272,7.272,0,0,1,.036,3.924,5.3,5.3,0,0,1-.774,1.638,3.83,3.83,0,0,1-1.314,1.134,3.885,3.885,0,0,1-1.872.432,5.493,5.493,0,0,1-.936-.09,3.984,3.984,0,0,1-.9-.27,3.229,3.229,0,0,1-.792-.486,2.743,2.743,0,0,1-.612-.684h-.036V28.6h-2.16V15.212h-.018Zm7.542,4.9a4.386,4.386,0,0,0-.18-1.278,3.26,3.26,0,0,0-.522-1.1,2.88,2.88,0,0,0-.846-.774,2.3,2.3,0,0,0-1.17-.288,2.391,2.391,0,0,0-2.052.936,4.263,4.263,0,0,0-.684,2.52,4.662,4.662,0,0,0,.18,1.368,3.047,3.047,0,0,0,.54,1.08,2.572,2.572,0,0,0,.864.72,2.441,2.441,0,0,0,1.17.27,2.4,2.4,0,0,0,1.242-.306,2.9,2.9,0,0,0,.846-.774,3.168,3.168,0,0,0,.468-1.1,6.182,6.182,0,0,0,.144-1.278Zm3.8-8.622h2.16V13.52h-2.16Zm0,3.726h2.16v9.774h-2.16Zm4.086-3.726h2.16v13.5H88.02Zm8.748,13.77a5.144,5.144,0,0,1-2.088-.4A4.74,4.74,0,0,1,93.132,23.8a4.624,4.624,0,0,1-.954-1.638,6.4,6.4,0,0,1-.342-2.07,5.847,5.847,0,0,1,.342-2.052,4.787,4.787,0,0,1,.954-1.638,4.317,4.317,0,0,1,1.548-1.062,5.464,5.464,0,0,1,2.088-.4,5.144,5.144,0,0,1,2.088.4A4.48,4.48,0,0,1,100.4,16.4a4.624,4.624,0,0,1,.954,1.638,6.289,6.289,0,0,1,.342,2.052,5.878,5.878,0,0,1-.342,2.07A5.1,5.1,0,0,1,100.4,23.8a4.317,4.317,0,0,1-1.548,1.062,5.4,5.4,0,0,1-2.088.4Zm0-1.71a2.49,2.49,0,0,0,1.242-.306,2.606,2.606,0,0,0,.864-.792,3.393,3.393,0,0,0,.5-1.1,4.937,4.937,0,0,0,0-2.5,3.227,3.227,0,0,0-.5-1.1,2.734,2.734,0,0,0-.864-.774,2.539,2.539,0,0,0-1.242-.306,2.489,2.489,0,0,0-1.242.306,2.757,2.757,0,0,0-.864.774,3.227,3.227,0,0,0-.5,1.1,4.9,4.9,0,0,0,0,2.5,3.227,3.227,0,0,0,.5,1.1,2.792,2.792,0,0,0,.864.792A2.357,2.357,0,0,0,96.768,23.546Zm5.58-8.334h1.638V12.26h2.16v2.934h1.944v1.6h-1.944v5.22a5.537,5.537,0,0,0,.036.594,1.248,1.248,0,0,0,.126.414.7.7,0,0,0,.306.252,1.605,1.605,0,0,0,.576.09,3.762,3.762,0,0,0,.45-.018,3.9,3.9,0,0,0,.45-.072V24.95q-.35.049-.7.072a4.472,4.472,0,0,1-.7.036,4.653,4.653,0,0,1-1.368-.162,1.966,1.966,0,0,1-.81-.468,1.673,1.673,0,0,1-.4-.774,6.143,6.143,0,0,1-.126-1.08v-5.76h-1.638v-1.6Z"
                            ></path>
                            <path
                              id="Path_2"
                              data-name="Path 2"
                              d="M13.032,2.09l3.042,9.4h9.882l-7.992,5.8,3.042,9.4-7.992-5.814L5.022,26.678l3.06-9.4L.09,11.468l9.882.018,3.06-9.4Zm4.932,15.192-4.932,3.582,5.616-1.458Z"
                              fill="#00b67a"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <ul className="reviews__stars">
                      <li className="is-active">
                        <svg
                          className="svg-icon svg-icon--TrustpilotStar"
                          width={20}
                          height={19}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.866 24.588"
                        >
                          <path
                            d="M13.032,2.09l3.042,9.4h9.882l-7.992,5.8,3.042,9.4-7.992-5.814L5.022,26.678l3.06-9.4L.09,11.468l9.882.018,3.06-9.4Zm4.932,15.192-4.932,3.582,5.616-1.458Z"
                            transform="translate(-0.09 -2.09)"
                            fill="currentColor"
                          />
                        </svg>
                      </li>
                      <li className="is-active">
                        <svg
                          className="svg-icon svg-icon--TrustpilotStar"
                          width={20}
                          height={19}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.866 24.588"
                        >
                          <path
                            d="M13.032,2.09l3.042,9.4h9.882l-7.992,5.8,3.042,9.4-7.992-5.814L5.022,26.678l3.06-9.4L.09,11.468l9.882.018,3.06-9.4Zm4.932,15.192-4.932,3.582,5.616-1.458Z"
                            transform="translate(-0.09 -2.09)"
                            fill="currentColor"
                          />
                        </svg>
                      </li>
                      <li className="is-active">
                        <svg
                          className="svg-icon svg-icon--TrustpilotStar"
                          width={20}
                          height={19}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.866 24.588"
                        >
                          <path
                            d="M13.032,2.09l3.042,9.4h9.882l-7.992,5.8,3.042,9.4-7.992-5.814L5.022,26.678l3.06-9.4L.09,11.468l9.882.018,3.06-9.4Zm4.932,15.192-4.932,3.582,5.616-1.458Z"
                            transform="translate(-0.09 -2.09)"
                            fill="currentColor"
                          />
                        </svg>
                      </li>
                      <li className="is-active">
                        <svg
                          className="svg-icon svg-icon--TrustpilotStar"
                          width={20}
                          height={19}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.866 24.588"
                        >
                          <path
                            d="M13.032,2.09l3.042,9.4h9.882l-7.992,5.8,3.042,9.4-7.992-5.814L5.022,26.678l3.06-9.4L.09,11.468l9.882.018,3.06-9.4Zm4.932,15.192-4.932,3.582,5.616-1.458Z"
                            transform="translate(-0.09 -2.09)"
                            fill="currentColor"
                          />
                        </svg>
                      </li>
                      <li className="is-active">
                        <svg
                          className="svg-icon svg-icon--TrustpilotStar"
                          width={20}
                          height={19}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.866 24.588"
                        >
                          <path
                            d="M13.032,2.09l3.042,9.4h9.882l-7.992,5.8,3.042,9.4-7.992-5.814L5.022,26.678l3.06-9.4L.09,11.468l9.882.018,3.06-9.4Zm4.932,15.192-4.932,3.582,5.616-1.458Z"
                            transform="translate(-0.09 -2.09)"
                            fill="currentColor"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>TrustScore | 365 reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-features text-xsm">
              <ul>
                <li>
                  <span>
                    <svg
                      className="svg-icon svg-icon--check"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 7.00082C14 6.3602 13.4832 5.84168 12.8427 5.83852C13.136 5.71484 13.3532 5.48492 13.4657 5.21216C13.5799 4.93784 13.5894 4.61912 13.4657 4.32259C13.2216 3.73115 12.5447 3.44888 11.9518 3.69148C12.1753 3.46473 12.2878 3.1698 12.2878 2.87326C12.2878 2.57516 12.1737 2.27863 11.947 2.05189C11.4952 1.59837 10.7612 1.59837 10.3078 2.04872C10.4283 1.75378 10.4187 1.43666 10.3062 1.1639C10.192 0.889576 9.97329 0.658076 9.67682 0.534382C9.08551 0.290187 8.40857 0.569266 8.16126 1.15755C8.15968 0.838832 8.02968 0.550242 7.82042 0.340926C7.60957 0.130032 7.31946 0 6.99923 0C6.35875 0 5.84035 0.516927 5.83719 1.15755C5.71354 0.864203 5.48367 0.646971 5.21098 0.532787C4.93672 0.418619 4.61807 0.409105 4.32161 0.532787C3.7303 0.778568 3.44809 1.45405 3.69064 2.04712C3.46394 1.82196 3.16908 1.71095 2.87261 1.71095C2.57458 1.71095 2.27811 1.82512 2.05142 2.05188C1.5996 2.5038 1.59801 3.23795 2.04825 3.69147C1.75338 3.57096 1.43789 3.58047 1.16363 3.69305C0.889374 3.80722 0.657926 4.02604 0.53426 4.32257C0.290121 4.91401 0.569137 5.59111 1.15728 5.83847C0.838641 5.84006 0.550117 5.97008 0.340848 6.1794C0.130002 6.39029 0 6.68046 0 7.00077C0 7.64139 0.516809 8.15991 1.15569 8.16307C0.862411 8.28676 0.645229 8.51667 0.532666 8.78943C0.418523 9.06534 0.410598 9.38247 0.532666 9.679C0.778391 10.2704 1.45372 10.5527 2.04665 10.3101C1.82154 10.5369 1.71056 10.8318 1.71056 11.1283C1.71056 11.4264 1.8247 11.723 2.05141 11.9497C2.50323 12.4016 3.23722 12.4032 3.69063 11.9529C3.57015 12.2478 3.57966 12.5649 3.69221 12.8377C3.80636 13.112 4.02512 13.3435 4.32159 13.4672C4.9129 13.713 5.59143 13.4323 5.83873 12.8425C5.84032 13.1612 5.97032 13.4498 6.17958 13.6591C6.39043 13.87 6.68054 14 7.00077 14C7.64125 14 8.15965 13.4831 8.16281 12.8425C8.28646 13.1358 8.51633 13.353 8.78902 13.4672C9.06328 13.5814 9.38193 13.5893 9.67839 13.4672C10.2697 13.223 10.5519 12.5459 10.3094 11.9529C10.5361 12.1765 10.8309 12.289 11.1274 12.289C11.4254 12.289 11.7219 12.1749 11.9486 11.9481C12.402 11.4946 12.402 10.762 11.9517 10.3085C12.2466 10.429 12.5637 10.4195 12.8364 10.3069C13.1106 10.1928 13.3421 9.97396 13.4657 9.67743C13.7115 9.08598 13.4309 8.40889 12.8427 8.16153C13.1614 8.15994 13.4499 8.02992 13.6592 7.8206C13.87 7.61129 14 7.3211 14 7.00082V7.00082ZM10.208 5.89877C10.0891 6.0177 9.9702 6.13662 9.85129 6.25556C9.22827 6.87872 8.60525 7.50189 7.98379 8.12349C7.58111 8.52626 7.17845 8.929 6.77418 9.33337C6.43017 9.67746 5.8864 9.66635 5.53764 9.33971C5.48374 9.28897 5.43142 9.23982 5.37752 9.19066C4.85121 8.69751 4.32489 8.20436 3.79854 7.7128C3.45135 7.38614 3.46404 6.80737 3.7922 6.47598C4.13462 6.1303 4.68157 6.14457 5.02874 6.46964C5.08264 6.5188 5.13496 6.56954 5.18886 6.61869C5.50275 6.91363 5.81823 7.20857 6.13212 7.50192C6.6727 6.95962 7.2149 6.41889 7.75548 5.87818C8.15816 5.47541 8.56081 5.07267 8.96509 4.6683C9.30275 4.33056 9.86237 4.32581 10.2016 4.66196C10.5393 4.99494 10.5456 5.56104 10.208 5.89878L10.208 5.89877Z"
                        fill="#FF553C"
                      />
                    </svg>
                  </span>
                  Guaranteed Instant Delivery
                </li>
                <li>
                  <span>
                    <svg
                      className="svg-icon svg-icon--people"
                      width={19}
                      height={9}
                      viewBox="0 0 19 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.67674 3.79166C10.7221 3.79166 11.5724 2.94115 11.5724 1.89583C11.5724 0.850507 10.7221 0 9.67674 0C8.63142 0 7.78091 0.850507 7.78091 1.89583C7.78091 2.94115 8.63142 3.79166 9.67674 3.79166ZM13.7899 6.84184C13.7899 8.18363 11.8131 8.36865 9.67674 8.36865C7.54037 8.36865 5.56361 8.18375 5.56361 6.84184C5.56361 5.65619 7.36028 4.27802 9.67674 4.27802C11.9931 4.27802 13.7899 5.65619 13.7899 6.84184ZM13.2641 2.51429C13.2641 1.61347 13.9969 0.880716 14.8976 0.880716C15.7985 0.880716 16.5314 1.6135 16.5314 2.51429C16.5314 3.41511 15.7985 4.148 14.8976 4.148C13.9968 4.14787 13.2641 3.41498 13.2641 2.51429ZM18.442 6.77642C18.442 7.93278 16.7385 8.09211 14.8975 8.09211C14.7214 8.09211 14.5485 8.09051 14.3797 8.08676C14.2981 8.08502 14.2248 8.03659 14.1908 7.96234C14.1571 7.88822 14.1686 7.80139 14.2204 7.73864C14.2276 7.72994 14.6827 7.16145 14.5372 6.44367C14.3939 5.73752 13.6574 5.09841 13.65 5.09197C13.5917 5.04194 13.5649 4.96447 13.5799 4.88914C13.5949 4.81382 13.6494 4.75241 13.7223 4.72846C14.1575 4.58557 14.5789 4.56724 14.8974 4.56724C16.8938 4.56711 18.4419 5.75478 18.4419 6.7764L18.442 6.77642ZM4.44115 4.22877C5.34197 4.22877 6.07473 3.49598 6.07473 2.59519C6.07473 1.69437 5.34194 0.961479 4.44115 0.961479C3.54033 0.961479 2.80744 1.69437 2.80744 2.59519C2.80757 3.49587 3.54047 4.22877 4.44115 4.22877ZM5.7875 4.88261C5.76677 4.80688 5.70616 4.74855 5.62976 4.73102C5.28191 4.65048 4.85646 4.60432 4.46258 4.60432C2.45851 4.60432 0.904297 5.79665 0.904297 6.82245C0.904297 7.98337 2.61456 8.14335 4.46258 8.14335L4.62633 8.14402C4.6852 8.14442 4.74514 8.14469 4.80347 8.14469C4.86194 8.14469 4.91894 8.14442 4.97165 8.14335C5.05273 8.14175 5.12564 8.09412 5.16016 8.02094C5.19495 7.94762 5.18491 7.86079 5.13487 7.7971C5.13073 7.79175 4.72346 7.26434 4.80241 6.53747C4.85793 6.02584 5.49009 5.32186 5.72905 5.09375C5.78578 5.03943 5.80826 4.95835 5.78752 4.88262L5.7875 4.88261Z"
                        fill="#FF553C"
                      />
                    </svg>
                  </span>
                  Real likes from real people
                </li>
                <li>
                  <span>
                    <svg
                      className="svg-icon svg-icon--split"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4908 4.00003L11.4285 5.71432C11.1002 5.97528 10.8928 6.14289 10.5714 6.14289C10.0773 6.14289 9.71422 5.74474 9.71422 5.28575V4.00003H6.50213C6.30067 4.27564 5.99081 4.96988 5.79585 5.4057C5.52195 6.019 5.27343 6.57318 4.99437 7.00003C5.27333 7.4265 5.52195 7.98107 5.79585 8.59437C5.99081 9.03021 6.30066 9.72492 6.50213 10H9.71422V8.71432C9.71422 8.25533 10.0773 7.85718 10.5714 7.85718C10.8928 7.85718 11.1002 8.02478 11.4285 8.28575L13.4908 10C13.7989 10.261 13.9999 10.5088 13.9999 10.8572C13.9999 11.2056 13.7989 11.4534 13.4908 11.7143L11.4285 13.4286C11.1002 13.6896 10.8928 13.8572 10.5714 13.8572C10.0773 13.8572 9.71422 13.459 9.71422 13V11.7143H6.28564C5.31237 11.7143 4.83492 10.6459 4.23061 9.29328C4.03096 8.84635 3.71211 8.13279 3.50595 7.85718H1.14279C0.669645 7.85718 0.285645 7.47318 0.285645 7.00003C0.285645 6.52689 0.669645 6.14289 1.14279 6.14289H3.50595C3.71211 5.86728 4.03097 5.15372 4.23071 4.70679C4.83492 3.35421 5.31237 2.28575 6.28564 2.28575H9.71422V1.00003C9.71422 0.541047 10.0773 0.142892 10.5714 0.142892C10.8928 0.142892 11.1002 0.310495 11.4285 0.571464L13.4908 2.28575C13.7989 2.54671 13.9999 2.79448 13.9999 3.14289C13.9999 3.49131 13.7989 3.73907 13.4908 4.00003Z"
                        fill="#FF553C"
                      />
                    </svg>
                  </span>
                  Option to split likes on multiple pictures
                </li>
                <li>
                  <span>
                    <svg
                      className="svg-icon svg-icon--lock"
                      width={13}
                      height={13}
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 3.38286V3.67751C13 3.77839 12.9792 3.87815 12.939 3.97029C12.8988 4.06243 12.8401 4.14488 12.7667 4.21228C12.6933 4.27969 12.6068 4.33053 12.5129 4.36151C12.419 4.39249 12.3198 4.4029 12.2217 4.39208H12.2069C12.0341 4.37367 11.8742 4.29042 11.758 4.15842C11.6419 4.02643 11.5777 3.85507 11.578 3.67751V3.38286C11.578 2.87164 11.3794 2.38136 11.0258 2.01987C10.6723 1.65839 10.1928 1.45531 9.69277 1.45531H9.57023C9.07024 1.45531 8.59072 1.65839 8.23717 2.01987C7.88362 2.38136 7.685 2.87164 7.685 3.38286V4.45817C7.21235 4.40722 6.74239 4.3673 6.263 4.34389V3.38011C6.26371 2.48411 6.61205 1.625 7.23158 0.991303C7.85111 0.357607 8.69121 0.001094 9.56754 2.8021e-07H9.69008C10.1247 -0.000180574 10.5551 0.0871864 10.9566 0.25711C11.3582 0.427034 11.7231 0.676185 12.0305 0.990331C12.3378 1.30448 12.5817 1.67746 12.748 2.08798C12.9144 2.4985 13 2.9385 13 3.38286ZM10.1277 6.60739V11.7843C10.1279 11.9609 10.0677 12.132 9.95752 12.268C9.84736 12.404 9.69417 12.4964 9.52445 12.5291L9.07468 12.6159C7.75261 12.8715 6.41004 13.0001 5.06453 13C3.71858 13.0002 2.37556 12.8716 1.05304 12.6159L0.603274 12.5291C0.433549 12.4964 0.280356 12.404 0.170195 12.268C0.0600331 12.132 -0.0001695 11.9609 3.58454e-07 11.7843V6.60739C-0.0001695 6.43079 0.0600331 6.25969 0.170195 6.12367C0.280356 5.98765 0.433549 5.89528 0.603274 5.86253L0.669257 5.85014C3.57368 5.28833 6.55539 5.28833 9.45981 5.85014L9.52579 5.86253C9.69527 5.89556 9.84815 5.98806 9.95804 6.12405C10.0679 6.26004 10.1279 6.43099 10.1277 6.60739ZM6.92014 7.98422L6.55117 7.60697C6.49036 7.54677 6.40931 7.51265 6.32467 7.51163C6.24003 7.5106 6.15821 7.54275 6.09602 7.60146L4.57437 8.97829L3.86741 8.41241C3.80362 8.3613 3.7237 8.33587 3.6428 8.34094C3.5619 8.34602 3.48563 8.38124 3.42842 8.43995L3.0608 8.8172C3.00187 8.87791 2.96748 8.9591 2.96448 9.04459C2.96149 9.13007 2.99011 9.21357 3.04464 9.27844L4.33737 10.8067C4.36845 10.8425 4.40661 10.8712 4.44932 10.8908C4.49202 10.9105 4.53832 10.9206 4.58515 10.9206C4.63197 10.9206 4.67827 10.9105 4.72098 10.8908C4.76369 10.8712 4.80184 10.8425 4.83292 10.8067L6.93091 8.45509C6.98842 8.39066 7.01939 8.30603 7.01738 8.21882C7.01538 8.13162 6.98054 8.04857 6.92014 7.98697V7.98422Z"
                        fill="#FF553C"
                      />
                    </svg>
                  </span>
                  No password required
                </li>
                <li>
                  <span>
                    <svg
                      className="svg-icon svg-icon--camera"
                      width={12}
                      height={8}
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.09674 6.48499e-05C7.48011 6.48499e-05 7.84781 0.172801 8.11889 0.480311C8.39006 0.787936 8.54232 1.20506 8.54232 1.63997V2.41077L10.8173 0.919903C10.9779 0.814661 11.166 0.777118 11.3486 0.813621C11.5312 0.850227 11.6967 0.958694 11.8157 1.11989C11.9349 1.28108 12.0001 1.4848 12 1.69518V6.30489C12.0001 6.51527 11.9349 6.719 11.8157 6.88018C11.6967 7.04137 11.5312 7.14984 11.3486 7.18644C11.166 7.22295 10.9779 7.1854 10.8173 7.08016L8.54232 5.58929V6.3601C8.54232 6.79501 8.39005 7.21213 8.11889 7.51975C7.84781 7.82727 7.48011 8 7.09674 8H1.44567C1.0622 8 0.694509 7.82726 0.423431 7.51975C0.152354 7.21213 0 6.79501 0 6.3601V1.6399C0 1.205 0.152358 0.787871 0.423431 0.480246C0.694509 0.172728 1.0622 0 1.44567 0L7.09674 6.48499e-05Z"
                        fill="#FF553C"
                      />
                    </svg>
                  </span>
                  Includes video views
                </li>
                <li>
                  <span>
                    <svg
                      width={16}
                      height={12}
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6147 4.69785L13.2279 4.91039C13.0754 4.94079 12.9231 4.81932 12.9231 4.65231L12.9383 1.61585C12.9383 0.826343 11.8866 0.568244 11.5055 1.25145L8.39628 7.05108C8.10667 7.59765 8.56395 8.25043 9.17357 8.15936L10.5606 7.94682C10.713 7.91642 10.8654 8.0379 10.8654 8.2049L10.8502 11.2414C10.8502 12.0309 11.9019 12.289 12.2829 11.6058L15.3921 5.80613C15.6818 5.25957 15.2245 4.60678 14.6148 4.69785H14.6147Z"
                        fill="#FF553C"
                      />
                      <path
                        opacity="0.3"
                        d="M8.51873 1.77303C8.51873 1.26768 8.12706 0.857178 7.64495 0.857178H1.30249C0.820353 0.857178 0.428711 1.2677 0.428711 1.77303C0.428711 2.27835 0.82038 2.68888 1.30249 2.68888H7.66001C8.12701 2.68888 8.51868 2.27827 8.51868 1.77303H8.51873Z"
                        fill="#FF553C"
                      />
                      <path
                        opacity="0.3"
                        d="M7 6C7 5.44821 6.70952 5 6.35195 5H1.64804C1.29046 5 1 5.44825 1 6C1 6.55176 1.29048 7 1.64804 7H6.36313C6.70948 7 6.99996 6.55166 6.99996 6H7Z"
                        fill="#FF553C"
                      />
                      <path
                        opacity="0.2"
                        d="M6.73209 9.55762H2.2147C1.73439 9.55762 1.34424 9.96814 1.34424 10.4735C1.34424 10.9788 1.73442 11.3893 2.2147 11.3893H6.73209C7.2124 11.3893 7.60256 10.9788 7.60256 10.4735C7.60256 9.96823 7.21238 9.55762 6.73209 9.55762Z"
                        fill="#FF553C"
                      />
                    </svg>
                  </span>
                  Fast delivery (gradual or instant)
                </li>
                <li>
                  <span>
                    <svg
                      className="svg-icon svg-icon--message"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.29421 0.44431C5.65215 -0.621959 2.59643 0.28437 1.00853 2.59018C-0.552686 4.86933 -0.272468 7.89486 1.64903 9.86746C1.51559 10.4406 1.24872 11.1337 0.714968 11.4802C0.621562 11.5468 0.581531 11.6535 0.594874 11.7601C0.621562 11.8667 0.701624 11.9467 0.821718 11.9733C0.848405 11.9733 1.04856 12 1.36881 12C1.96928 12 2.97006 11.8934 3.8374 11.2803C4.51793 11.5335 5.23849 11.6668 5.98574 11.6668H5.99908C8.85464 11.6668 11.3232 9.69419 11.8837 6.97521C12.4441 4.25622 10.9363 1.51058 8.29421 0.44431ZM3.89078 4.22956H6.90646C7.05324 4.22956 7.17333 4.34952 7.17333 4.49613C7.17333 4.64274 7.05324 4.7627 6.90646 4.7627H3.89078C3.74399 4.7627 3.6239 4.64274 3.6239 4.49613C3.6239 4.34952 3.74399 4.22956 3.89078 4.22956ZM8.72121 7.17513H3.89078C3.74399 7.17513 3.6239 7.05518 3.6239 6.90857C3.6239 6.76195 3.74399 6.642 3.89078 6.642H8.72121C8.86799 6.642 8.98808 6.76195 8.98808 6.90857C8.98808 7.05518 8.86799 7.17513 8.72121 7.17513Z"
                        fill="#FF553C"
                      />
                    </svg>
                  </span>
                  24/7 Live Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{question && <LikesInfo />}
    </div>
   
  )
}
