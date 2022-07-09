import React,{useState} from 'react'

export default function Contact() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [order,setOrder]=useState("");
    const [msg,setMsg]=useState("");

    function handleChange1(event){
        setName(event.target.value);
    }
    function handleChange2(event){
        setEmail(event.target.value);
    }
    function handleChange3(event){
        setOrder(event.target.value);
    }
    function handleChange4(event){
        setMsg(event.target.value);
    }
    
  return (
    <div>
        <div className="main">
  <div className="section section--contact">
    <div className="shell">
      <div className="section__image">
        <div className="svg-image svg-image--contactBlobs">
          <svg
            width="183"
            height="99"
            viewBox="0 0 183 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="42.2308"
              cy="56.7772"
              rx="42.2308"
              ry="41.7615"
              fill="#FF553C"
            ></ellipse>
            <mask
              id="mask0_522_3800"
              styles="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="14"
              width="85"
              height="85"
            >
              <circle
                cx="42.0348"
                cy="56.5993"
                r="42.0309"
                fill="#FF553C"
              ></circle>
            </mask>
            <g mask="url(#mask0_522_3800)">
              <g opacity="0.78">
                <path
                  d="M51.9609 115.46C57.962 110.992 61.574 104.011 61.7552 96.5316L62.6697 58.787C62.9952 45.3519 52.3678 34.1968 38.9327 33.8712C25.4977 33.5457 14.3425 44.1731 14.017 57.6082L13.8553 64.2812L12.1471 114.263L31.0192 119.416C38.2368 121.387 45.9598 119.928 51.9609 115.46Z"
                  fill="url(#paint0_linear_522_3800)"
                ></path>
                <path
                  d="M51.9609 115.46C57.962 110.992 61.574 104.011 61.7552 96.5316L62.6697 58.787C62.9952 45.3519 52.3678 34.1968 38.9327 33.8712C25.4977 33.5457 14.3425 44.1731 14.017 57.6082L13.8553 64.2812L12.1471 114.263L31.0192 119.416C38.2368 121.387 45.9598 119.928 51.9609 115.46Z"
                  fill="#FFEAE7"
                ></path>
              </g>
              <path
                d="M31.4237 46.5671C32.8547 49.8002 36.5885 49.3617 37.7315 46.8062M40.9192 46.7421C42.3503 49.9752 46.0841 49.5367 47.2271 46.9812M29.5149 52.6385C35.9764 60.5198 43.6312 59.1843 48.5404 51.4402"
                stroke="#F80000"
                stroke-width="1.32343"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <ellipse
              cx="140.77"
              cy="56.7772"
              rx="42.2308"
              ry="41.7615"
              fill="#FF553C"
            ></ellipse>
            <mask
              id="mask1_522_3800"
              styles="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="98"
              y="14"
              width="85"
              height="85"
            >
              <circle
                cx="140.968"
                cy="56.5958"
                r="42.0309"
                fill="#FF553C"
              ></circle>
            </mask>
            <g mask="url(#mask1_522_3800)">
              <g opacity="0.78">
                <path
                  d="M157.902 109.244C163.96 104.325 167.418 96.8934 167.279 89.0915L166.579 49.7205C166.33 35.7066 154.768 24.5479 140.754 24.7969C126.74 25.046 115.581 36.6084 115.83 50.6224L115.954 57.5829L116.363 109.74L136.253 114.284C143.861 116.021 151.844 114.163 157.902 109.244Z"
                  fill="url(#paint1_linear_522_3800)"
                ></path>
                <path
                  d="M157.902 109.244C163.96 104.325 167.418 96.8934 167.279 89.0915L166.579 49.7205C166.33 35.7066 154.768 24.5479 140.754 24.7969C126.74 25.046 115.581 36.6084 115.83 50.6224L115.954 57.5829L116.363 109.74L136.253 114.284C143.861 116.021 151.844 114.163 157.902 109.244Z"
                  fill="#FFEAE7"
                ></path>
              </g>
              <path
                d="M133.48 38.3495C135.113 41.6558 138.984 41.0354 140.063 38.3225M143.382 38.1161C145.015 41.4224 148.886 40.802 149.966 38.0891M131.757 44.7597C138.835 52.6893 146.753 50.9625 151.529 42.6781"
                stroke="#F80000"
                stroke-width="1.38027"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <rect
                x="157.049"
                y="37.8394"
                width="14.2258"
                height="25.2185"
                rx="4.24097"
                transform="rotate(16.165 157.049 37.8394)"
                fill="#6C1818"
              ></rect>
              <rect
                opacity="0.2"
                x="152.708"
                y="70.7144"
                width="14.8725"
                height="35.9584"
                rx="7.43624"
                transform="rotate(-8.3767 152.708 70.7144)"
                fill="#C6B692"
              ></rect>
              <rect
                opacity="0.78"
                x="155.293"
                y="61.6562"
                width="14.8725"
                height="35.9584"
                rx="7.43624"
                transform="rotate(-8.3767 155.293 61.6562)"
                fill="#FFEAE7"
              ></rect>
            </g>
            <g filter="url(#filter0_d_522_3800)">
              <path
                d="M90.0918 18.7692C90.0918 29.1418 98.3994 37.5386 108.662 37.5386L129.764 37.5386C131.896 37.5386 133.096 35.0241 131.763 33.3628L127.187 27.7051L127.187 18.7695C127.187 8.39693 118.88 0.000113804 108.617 0.000114253C98.3996 0.000114699 90.092 8.39693 90.092 18.7695L90.0918 18.7692Z"
                fill="#FFFBFB"
              ></path>
            </g>
            <rect
              x="5.63086"
              y="49.7388"
              width="10.3231"
              height="19.7077"
              rx="5.16154"
              fill="#6C1818"
            ></rect>
            <rect
              x="61.9385"
              y="49.7388"
              width="9.38461"
              height="19.7077"
              rx="4.69231"
              fill="#6C1818"
            ></rect>
            <path
              d="M11.2617 52.5539C11.2617 42.7063 19.2303 34.7231 29.0601 34.7231H49.771C59.6008 34.7231 67.5694 42.7063 67.5694 52.5539"
              stroke="#A92A48"
              stroke-width="1.2117"
            ></path>
            <g filter="url(#filter1_d_522_3800)">
              <path
                d="M84.4609 37.0695C84.4609 44.0709 78.7379 49.7388 71.6683 49.7388L57.1313 49.7388C55.6624 49.7388 54.836 48.0415 55.7542 46.9201L58.9062 43.1012L58.9062 37.0696C58.9062 30.0682 64.6292 24.4003 71.6988 24.4003C78.7378 24.4003 84.4608 30.0682 84.4608 37.0696L84.4609 37.0695Z"
                fill="#FFFBFB"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_d_522_3800"
                x="86.338"
                y="0"
                width="49.7382"
                height="45.0463"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="3.75385"></feOffset>
                <feGaussianBlur stdDeviation="1.87692"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_522_3800"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_522_3800"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter1_d_522_3800"
                x="51.6143"
                y="24.4004"
                width="36.6005"
                height="32.8461"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="3.75385"></feOffset>
                <feGaussianBlur stdDeviation="1.87692"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_522_3800"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_522_3800"
                  result="shape"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_522_3800"
                x1="39.1747"
                y1="31.7921"
                x2="34.4303"
                y2="115.26"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA3A3"></stop>
                <stop offset="1" stop-color="#FDDC5D"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_522_3800"
                x1="140.915"
                y1="22.6199"
                x2="139.626"
                y2="109.803"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA3A3"></stop>
                <stop offset="1" stop-color="#FDDC5D"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="section__head">
        <h1>Get in Touch</h1>
        <p>
          If you have any questions about our<br />Instagram growth services,
          please send us a message below.
        </p>
      </div>
      <div className="section__body">
        <form className="form form--contact">
          <div className="form__entry">
            No question is too small. We reply 24/7!
          </div>
          <div className="form__content">
            <div className="field field--vertical">
              <label for="name" className="field__label">First Name</label>
              <div  onChange={handleChange1} className="field__control">
                <input 
                  type="text"
                  name="name"
                  className="field__input"
                  placeholder="Required"
                  id="name"
                  value={name}
                />
              </div>
            </div>
            <div className="field field--vertical">
              <label for="email" className="field__label">Your E-mail</label>
              <div onChange={handleChange2} className="field__control">
                <input
                  type="text"
                  name="email"
                  className="field__input"
                  placeholder="Required"
                  id="email"
                  value={email}/>
              </div>
            </div>
            <div className="field field--dropdown field--vertical">
              <label for="reason" className="field__label">Reason (Optional)</label>
              <div className="field__control">
                <select name="reason" className="field__input" id="reason">
                  <option value="" disabled="" hidden="" selected="">
                    Optional
                  </option>
                  <option value="General enquiries">General enquiries</option>
                  <option value="About my order">About my order</option>
                  <option value="Custom &amp; bulk orders">
                    Custom &amp; bulk orders
                  </option>
                  <option value="Technical support">Technical support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="field field--vertical">
              <label for="orderNumber" className="field__label"
                >Order Number (Optional)</label
              >
              <div onChange={handleChange3} className="field__control">
                <input
                  type="text"
                  name="orderNumber"
                  className="field__input"
                  placeholder="Optional"
                  id="orderNumber"
                  value={order}
                />
              </div>
            </div>
            <div className="field field--textarea field--vertical">
              <label for="message" className="field__label">Message</label>
              <div onChange={handleChange4} className="field__control">
                <textarea
                  name="message"
                  className="field__input"
                  placeholder="How can we help?"
                  id="message"
                  value={msg}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form__actions">
            <button className="btn" type="submit">
              <span></span><span></span><span></span><strong>Contact Us</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
