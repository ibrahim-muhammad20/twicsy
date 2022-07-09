import React,{useState} from 'react'

export default function Views_Questions() {
    const [style1,setStyle1]=useState(false);
    const [style2,setStyle2]=useState(false);
    const [style3,setStyle3]=useState(false);
    const [style4,setStyle4]=useState(false);
    const [style5,setStyle5]=useState(false);
    const [style6,setStyle6]=useState(false);

    const [act1,setActive1]=useState(false);
    const [act2,setActive2]=useState(false);
    const [act3,setActive3]=useState(false);
    const [act4,setActive4]=useState(false);
    const [act5,setActive5]=useState(false);
    const [act6,setActive6]=useState(false);

     const btnSign1=()=>{
        setStyle1(style1=>!style1)
    }
    const btnSign2=()=>{
        setStyle2(style2=>!style2)
    }
    const btnSign3=()=>{
        setStyle3(style3=>!style3)
    }
    const btnSign4=()=>{
        setStyle4(style4=>!style4)
    }
    const btnSign5=()=>{
        setStyle5(style5=>!style5)
    }
    const btnSign6=()=>{
        setStyle6(style6=>!style6)
    }
    const btnActive1=()=>{
        setActive1(act1=>!act1)
    }
    const btnActive2=()=>{
        setActive2(act2=>!act2)
    }
    const btnActive3=()=>{
        setActive3(act3=>!act3)
    }
    const btnActive4=()=>{
        setActive4(act4=>!act4)
    }
    const btnActive5=()=>{
        setActive5(act5=>!act5)
    }
    const btnActive6=()=>{
        setActive6(act6=>!act6)
    }

  return (
    <div>
         <div
  className="animate in-view is-animated"
  data-delay="0"
  data-duration="400"
  data-animation="fade-up"
>
  <div className="section section--questions">
    <div className="shell">
      <div className="section__head">
        <h2>Buy Instagram Views easily with Twicsy</h2>
      </div>
      <div className="questions">
        <div className="blobs blobs--cyan">
          <div className="blobs__holder">
            <div className="blob blob--left">
              <svg
                width="274"
                height="238"
                viewBox="0 0 274 238"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="blob__body"
                  d="M143.663 232.92C121.673 233.098 100.832 223.313 87.1516 206.389L18.114 120.983C-6.45971 90.5833 -1.31022 46.3171 29.6158 22.1119C60.5418 -2.09334 105.533 2.92843 130.107 33.3283L142.312 48.4274L234.899 160.655L199.78 205.48C186.349 222.623 165.654 232.743 143.663 232.92Z"
                  fill="#FFB6AB"
                ></path>
                <path
                  className="blob__face"
                  d="M41.3622 63.1121C50.1713 68.102 58.0068 60.72 56.272 52.8938M63.4911 47.3046C72.3002 52.2945 80.1356 44.9125 78.4008 37.0863M37.5951 78.3983C65.9042 85.4868 95.6536 65.5285 93.7198 39.3447"
                  stroke="#FF553C"
                  stroke-width="4.92264"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="blob blob--middle">
              <svg
                width="349"
                height="340"
                viewBox="0 0 349 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="blob__body"
                  d="M105.043 246.657C87.2405 232.715 77.1338 229.278 76.529 207.517L73.7357 104.671C72.6492 65.5833 104.002 34.8709 143.764 36.0731C183.526 37.2753 216.64 69.9369 217.726 109.025L218.007 121.47L222.873 249.546L166.265 240.452C144.921 245.024 122.846 260.599 105.043 246.657Z"
                  fill="#FFB6AB"
                ></path>
                <path
                  className="blob__face"
                  d="M125.413 62.6623C128.746 69.987 137.234 68.9011 139.775 63.0579M147.029 62.8369C150.362 70.1616 158.85 69.0758 161.391 63.2326M111.251 68.8341C126.143 86.6195 165.657 85.5081 176.648 67.7673"
                  stroke="#FF553C"
                  stroke-width="3.91287"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="blob blob--right">
              <svg
                width="267"
                height="234"
                viewBox="0 0 267 234"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="blob__body"
                  d="M133.391 229.998C154.784 228.858 174.464 217.94 186.755 200.392L248.779 111.841C270.856 80.3216 263.202 36.8729 231.682 14.7958C200.163 -7.28138 156.714 0.373153 134.637 31.8927L123.671 47.5478L40.3528 164.021L77.1828 206.229C91.2684 222.372 111.997 231.137 133.391 229.998Z"
                  fill="#FFB6AB"
                ></path>
                <path
                  className="blob__face"
                  d="M193.676 33.154C191.962 43.1321 201.56 48.0065 208.337 43.7251M216.04 48.6263C214.326 58.6044 223.925 63.4787 230.702 59.1974M179.498 44.6049C182.41 73.6423 202.78 82.5942 226.764 71.9121"
                  stroke="#FF553C"
                  stroke-width="4.92264"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="blobs__arrow">
              <svg
                width="201"
                height="223"
                viewBox="0 0 201 223"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M115.745 4.20756C107.382 -0.390078 97.2256 -0.284367 88.9609 4.48632L13.6544 47.9557C0.604693 55.4885 -3.86772 72.1739 3.66503 85.2236C11.1978 98.2734 27.8832 102.746 40.9329 95.213L76.8 74.5093L76.8 206.435C76.8 215.197 88.2784 222.3 102.438 222.3C116.597 222.3 128.075 215.197 128.075 206.435L128.075 73.2558L160.413 91.0352C173.617 98.2947 190.205 93.476 197.465 80.2723C204.724 67.0686 199.906 50.4799 186.702 43.2204L115.745 4.20756Z"
                  fill="url(#paint0_linear_36_932)"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M115.745 4.20756C107.382 -0.390078 97.2256 -0.284367 88.9609 4.48632L13.6544 47.9557C0.604693 55.4885 -3.86772 72.1739 3.66503 85.2236C11.1978 98.2734 27.8832 102.746 40.9329 95.213L76.8 74.5093L76.8 206.435C76.8 215.197 88.2784 222.3 102.438 222.3C116.597 222.3 128.075 215.197 128.075 206.435L128.075 73.2558L160.413 91.0352C173.617 98.2947 190.205 93.476 197.465 80.2723C204.724 67.0686 199.906 50.4799 186.702 43.2204L115.745 4.20756Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_36_932"
                    x1="188.471"
                    y1="270.615"
                    x2="-2.11774"
                    y2="132.631"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="#FFE8F6"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <div  onClick={btnActive1} className={act1?"question is-expanded":"question"}>
              <svg
                className="svg-icon svg-icon--boxQuestion"
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="27" r="16" fill="#FF553C"></circle>
                <path
                  d="M50.5945 23.4937L48 19.0138V14.0539C48 12.9337 47.4054 11.9207 46.4327 11.334L42.0544 8.82727L39.4057 4.45331C38.865 3.49349 37.784 2.90682 36.649 2.90682H31.4596L27.027 0.400119C26.0542 -0.133373 24.8107 -0.133373 23.8379 0.400119L19.4053 2.90682H14.3242C13.1888 2.90682 12.1622 3.49351 11.5675 4.45331L9.02696 8.77327L4.48653 11.3332C3.51375 11.8667 2.91915 12.9333 2.91915 14.0531V19.1734L0.43248 23.4402C0.162133 23.9201 0 24.4536 0 24.9867C0 25.5202 0.162133 26.0533 0.43248 26.5332L2.91915 30.8V35.9203C2.91915 37.0405 3.51377 38.0534 4.48653 38.6402L9.02696 41.2001L11.5675 45.5201C12.1082 46.4799 13.1892 47.0666 14.3242 47.0666H19.4053L23.8379 49.5733C24.3243 49.84 24.8651 50 25.4053 50C25.946 50 26.4863 49.84 26.9727 49.5733L31.4053 47.0666L36.7029 47.0673C37.8382 47.0673 38.8648 46.4806 39.4595 45.5208L42.054 41.0941L46.4323 38.5874C47.4051 38.0539 47.9997 36.9873 47.9997 35.8675V30.9076L50.5942 26.4277C51.1352 25.6271 51.1352 24.4536 50.5945 23.4938L50.5945 23.4937ZM27.5676 35.8139H23.5135V32.4005H27.5676V35.8139ZM27.6215 27.8138V29.787H23.5135V24.0805H25.5676C27.2432 24.0805 28.6489 22.6939 28.6489 21.0403C28.6489 19.387 27.2436 18 25.5676 18C23.892 18 22.4864 19.3866 22.4864 21.0403H18.3783C18.3783 17.147 21.6218 13.9469 25.5675 13.9469C29.5134 13.9469 32.7567 17.1471 32.7567 21.0403C32.7563 24.2405 30.5944 26.9603 27.6213 27.8138H27.6215Z"
                  fill="#FFB6AB"
                ></path>
              </svg>
              <div className="question__inner">
                <h3 className="question__title">Do I need more Instagram views?</h3>
                <div className="question__entry">
                  <p>
                    Instagram marketing experts know there's only one way to
                    make a video go viral: lots of other people must have
                    already watched it. Why? Surfers want "proof" that clicking
                    the play button will be worth their time. On Instagram, that
                    proof is the "number of views."
                  </p>
                  <p>
                    So if you want your video seen widely – yes, you need more
                    Instagram views.
                  </p>
                  <p>
                    If you have a new Instagram account without many new
                    followers, Twicsy has the solution you need. We deliver real
                    views from real Instagram users, boosting your view count
                    and turning your previously-ignored, high-quality content
                    into a "must-see video!"
                  </p>
                  <p>
                    And that increased user engagement is just what the
                    Instagram algorithm looks for. That means Instagram will
                    display your video to a broader number of Instagram
                    accounts, and your presence will be boosted on hashtag and
                    explore pages.
                  </p>
                </div>
                <button type="button"  onClick={btnSign1} className={style1?"btn-more question__btn is-active " :"btn-more question__btn "}>
                  <span></span>{style1?"Less":"More"}
                </button>
              </div>
            </div>
          </li>
          <li>
            <div  onClick={btnActive2} className={act2?"question is-expanded":"question"}>
              <svg
                className="svg-icon svg-icon--boxQuestion"
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="27" r="16" fill="#FF553C"></circle>
                <path
                  d="M50.5945 23.4937L48 19.0138V14.0539C48 12.9337 47.4054 11.9207 46.4327 11.334L42.0544 8.82727L39.4057 4.45331C38.865 3.49349 37.784 2.90682 36.649 2.90682H31.4596L27.027 0.400119C26.0542 -0.133373 24.8107 -0.133373 23.8379 0.400119L19.4053 2.90682H14.3242C13.1888 2.90682 12.1622 3.49351 11.5675 4.45331L9.02696 8.77327L4.48653 11.3332C3.51375 11.8667 2.91915 12.9333 2.91915 14.0531V19.1734L0.43248 23.4402C0.162133 23.9201 0 24.4536 0 24.9867C0 25.5202 0.162133 26.0533 0.43248 26.5332L2.91915 30.8V35.9203C2.91915 37.0405 3.51377 38.0534 4.48653 38.6402L9.02696 41.2001L11.5675 45.5201C12.1082 46.4799 13.1892 47.0666 14.3242 47.0666H19.4053L23.8379 49.5733C24.3243 49.84 24.8651 50 25.4053 50C25.946 50 26.4863 49.84 26.9727 49.5733L31.4053 47.0666L36.7029 47.0673C37.8382 47.0673 38.8648 46.4806 39.4595 45.5208L42.054 41.0941L46.4323 38.5874C47.4051 38.0539 47.9997 36.9873 47.9997 35.8675V30.9076L50.5942 26.4277C51.1352 25.6271 51.1352 24.4536 50.5945 23.4938L50.5945 23.4937ZM27.5676 35.8139H23.5135V32.4005H27.5676V35.8139ZM27.6215 27.8138V29.787H23.5135V24.0805H25.5676C27.2432 24.0805 28.6489 22.6939 28.6489 21.0403C28.6489 19.387 27.2436 18 25.5676 18C23.892 18 22.4864 19.3866 22.4864 21.0403H18.3783C18.3783 17.147 21.6218 13.9469 25.5675 13.9469C29.5134 13.9469 32.7567 17.1471 32.7567 21.0403C32.7563 24.2405 30.5944 26.9603 27.6213 27.8138H27.6215Z"
                  fill="#FFB6AB"
                ></path>
              </svg>
              <div className="question__inner">
                <h3 className="question__title">
                  Do I get quality views from Twicsy?
                </h3>
                <div className="question__entry">
                  <p>
                    Large amounts of views from bots or fake accounts that other
                    "Instagram service providers" deliver won't help you at all.
                    By contrast, we designed Twicsy to provide the optimal
                    balance of quantity and quality for Instagram engagement. We
                    supply real views from real people, and we also offer
                    different organic views packages which let you select the
                    type of viewers you need.
                  </p>
                  <p>
                    Our years of Instagram experience allow us to ensure that
                    these instant views won't hurt your account or your metrics.
                    They're a safe way to increase your reputation, brand
                    awareness, or social media marketing presence. They're great
                    for influencers, too!
                  </p>
                </div>
                <button type="button"  onClick={btnSign2} className={style2?"btn-more question__btn is-active " :"btn-more question__btn "}>
                  <span></span>{style2?"Less":"More"}
                </button>
              </div>
            </div>
          </li>
          <li>
            <div onClick={btnActive3} className={act3?"question is-expanded":"question"}>
              <svg
                className="svg-icon svg-icon--boxQuestion"
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="27" r="16" fill="#FF553C"></circle>
                <path
                  d="M50.5945 23.4937L48 19.0138V14.0539C48 12.9337 47.4054 11.9207 46.4327 11.334L42.0544 8.82727L39.4057 4.45331C38.865 3.49349 37.784 2.90682 36.649 2.90682H31.4596L27.027 0.400119C26.0542 -0.133373 24.8107 -0.133373 23.8379 0.400119L19.4053 2.90682H14.3242C13.1888 2.90682 12.1622 3.49351 11.5675 4.45331L9.02696 8.77327L4.48653 11.3332C3.51375 11.8667 2.91915 12.9333 2.91915 14.0531V19.1734L0.43248 23.4402C0.162133 23.9201 0 24.4536 0 24.9867C0 25.5202 0.162133 26.0533 0.43248 26.5332L2.91915 30.8V35.9203C2.91915 37.0405 3.51377 38.0534 4.48653 38.6402L9.02696 41.2001L11.5675 45.5201C12.1082 46.4799 13.1892 47.0666 14.3242 47.0666H19.4053L23.8379 49.5733C24.3243 49.84 24.8651 50 25.4053 50C25.946 50 26.4863 49.84 26.9727 49.5733L31.4053 47.0666L36.7029 47.0673C37.8382 47.0673 38.8648 46.4806 39.4595 45.5208L42.054 41.0941L46.4323 38.5874C47.4051 38.0539 47.9997 36.9873 47.9997 35.8675V30.9076L50.5942 26.4277C51.1352 25.6271 51.1352 24.4536 50.5945 23.4938L50.5945 23.4937ZM27.5676 35.8139H23.5135V32.4005H27.5676V35.8139ZM27.6215 27.8138V29.787H23.5135V24.0805H25.5676C27.2432 24.0805 28.6489 22.6939 28.6489 21.0403C28.6489 19.387 27.2436 18 25.5676 18C23.892 18 22.4864 19.3866 22.4864 21.0403H18.3783C18.3783 17.147 21.6218 13.9469 25.5675 13.9469C29.5134 13.9469 32.7567 17.1471 32.7567 21.0403C32.7563 24.2405 30.5944 26.9603 27.6213 27.8138H27.6215Z"
                  fill="#FFB6AB"
                ></path>
              </svg>
              <div className="question__inner">
                <h3 className="question__title">
                  What information does Twicsy need from me?
                </h3>
                <div className="question__entry">
                  <p>
                    All we need is your email address, Instagram username, and
                    the Instagram video or Instagram story you want to promote.
                    We'll never ask for your password or other sensitive
                    information. Checkout is on a fully secure server. We never
                    save any details from your payment methods (like credit card
                    information). Your data is safe, and your privacy is
                    protected – as we boost your Instagram profile and online
                    presence with high-quality views.
                  </p>
                </div>
                <button type="button"  onClick={btnSign3} className={style3?"btn-more question__btn is-active " :"btn-more question__btn "}>
                  <span></span>{style3?"Less":"More"}
                </button>
              </div>
            </div>
          </li>
          <li>
            <div  onClick={btnActive4} className={act4?"question is-expanded":"question"}>
              <svg
                className="svg-icon svg-icon--boxQuestion"
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="27" r="16" fill="#FF553C"></circle>
                <path
                  d="M50.5945 23.4937L48 19.0138V14.0539C48 12.9337 47.4054 11.9207 46.4327 11.334L42.0544 8.82727L39.4057 4.45331C38.865 3.49349 37.784 2.90682 36.649 2.90682H31.4596L27.027 0.400119C26.0542 -0.133373 24.8107 -0.133373 23.8379 0.400119L19.4053 2.90682H14.3242C13.1888 2.90682 12.1622 3.49351 11.5675 4.45331L9.02696 8.77327L4.48653 11.3332C3.51375 11.8667 2.91915 12.9333 2.91915 14.0531V19.1734L0.43248 23.4402C0.162133 23.9201 0 24.4536 0 24.9867C0 25.5202 0.162133 26.0533 0.43248 26.5332L2.91915 30.8V35.9203C2.91915 37.0405 3.51377 38.0534 4.48653 38.6402L9.02696 41.2001L11.5675 45.5201C12.1082 46.4799 13.1892 47.0666 14.3242 47.0666H19.4053L23.8379 49.5733C24.3243 49.84 24.8651 50 25.4053 50C25.946 50 26.4863 49.84 26.9727 49.5733L31.4053 47.0666L36.7029 47.0673C37.8382 47.0673 38.8648 46.4806 39.4595 45.5208L42.054 41.0941L46.4323 38.5874C47.4051 38.0539 47.9997 36.9873 47.9997 35.8675V30.9076L50.5942 26.4277C51.1352 25.6271 51.1352 24.4536 50.5945 23.4938L50.5945 23.4937ZM27.5676 35.8139H23.5135V32.4005H27.5676V35.8139ZM27.6215 27.8138V29.787H23.5135V24.0805H25.5676C27.2432 24.0805 28.6489 22.6939 28.6489 21.0403C28.6489 19.387 27.2436 18 25.5676 18C23.892 18 22.4864 19.3866 22.4864 21.0403H18.3783C18.3783 17.147 21.6218 13.9469 25.5675 13.9469C29.5134 13.9469 32.7567 17.1471 32.7567 21.0403C32.7563 24.2405 30.5944 26.9603 27.6213 27.8138H27.6215Z"
                  fill="#FFB6AB"
                ></path>
              </svg>
              <div className="question__inner">
                <h3 className="question__title">
                  How fast will I see results with Twicsy?
                </h3>
                <div className="question__entry">
                  <p>
                    You can't "wait and see what happens" on social media
                    platforms. You have to move quickly, especially in the Insta
                    world. And that's what Twicsy does. You'll see new, real
                    video views or story views on your video within 24 hours,
                    often much sooner. We pride ourselves on fast delivery time
                    for all of our Instagram services – and we guarantee it!
                  </p>
                </div>
                <button type="button"  onClick={btnSign4} className={style4?"btn-more question__btn is-active " :"btn-more question__btn "}>
                  <span></span>{style4?"Less":"More"}
                </button>
              </div>
            </div>
          </li>
          <li>
            <div  onClick={btnActive5} className={act5?"question is-expanded":"question"}>
              <svg
                className="svg-icon svg-icon--boxQuestion"
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="27" r="16" fill="#FF553C"></circle>
                <path
                  d="M50.5945 23.4937L48 19.0138V14.0539C48 12.9337 47.4054 11.9207 46.4327 11.334L42.0544 8.82727L39.4057 4.45331C38.865 3.49349 37.784 2.90682 36.649 2.90682H31.4596L27.027 0.400119C26.0542 -0.133373 24.8107 -0.133373 23.8379 0.400119L19.4053 2.90682H14.3242C13.1888 2.90682 12.1622 3.49351 11.5675 4.45331L9.02696 8.77327L4.48653 11.3332C3.51375 11.8667 2.91915 12.9333 2.91915 14.0531V19.1734L0.43248 23.4402C0.162133 23.9201 0 24.4536 0 24.9867C0 25.5202 0.162133 26.0533 0.43248 26.5332L2.91915 30.8V35.9203C2.91915 37.0405 3.51377 38.0534 4.48653 38.6402L9.02696 41.2001L11.5675 45.5201C12.1082 46.4799 13.1892 47.0666 14.3242 47.0666H19.4053L23.8379 49.5733C24.3243 49.84 24.8651 50 25.4053 50C25.946 50 26.4863 49.84 26.9727 49.5733L31.4053 47.0666L36.7029 47.0673C37.8382 47.0673 38.8648 46.4806 39.4595 45.5208L42.054 41.0941L46.4323 38.5874C47.4051 38.0539 47.9997 36.9873 47.9997 35.8675V30.9076L50.5942 26.4277C51.1352 25.6271 51.1352 24.4536 50.5945 23.4938L50.5945 23.4937ZM27.5676 35.8139H23.5135V32.4005H27.5676V35.8139ZM27.6215 27.8138V29.787H23.5135V24.0805H25.5676C27.2432 24.0805 28.6489 22.6939 28.6489 21.0403C28.6489 19.387 27.2436 18 25.5676 18C23.892 18 22.4864 19.3866 22.4864 21.0403H18.3783C18.3783 17.147 21.6218 13.9469 25.5675 13.9469C29.5134 13.9469 32.7567 17.1471 32.7567 21.0403C32.7563 24.2405 30.5944 26.9603 27.6213 27.8138H27.6215Z"
                  fill="#FFB6AB"
                ></path>
              </svg>
              <div className="question__inner">
                <h3 className="question__title">Why should I use Twicsy?</h3>
                <div className="question__entry">
                  <p>
                    Well, our very affordable prices are a great start, but it
                    goes much further than that. Each of our founders has more
                    than a decade's worth of experience providing social media
                    services and has specialized in boosting the Instagram
                    presence of some of the web's best sites. You'll be
                    receiving real views from real users, leveraged in the right
                    way to send your IG presence and influence soaring.
                  </p>
                  <p>
                    And our 24/7 support staff is always ready to provide
                    high-quality service, whether you have questions about
                    ordering or need a custom package of views, followers, and
                    likes.
                  </p>
                </div>
                <button type="button"  onClick={btnSign5} className={style5?"btn-more question__btn is-active " :"btn-more question__btn "}>
                  <span></span>{style5?"Less":"More"}
                </button>
              </div>
            </div>
          </li>
          <li>
            <div  onClick={btnActive6} className={act6?"question is-expanded":"question"}>
              <svg
                className="svg-icon svg-icon--boxQuestion"
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="27" r="16" fill="#FF553C"></circle>
                <path
                  d="M50.5945 23.4937L48 19.0138V14.0539C48 12.9337 47.4054 11.9207 46.4327 11.334L42.0544 8.82727L39.4057 4.45331C38.865 3.49349 37.784 2.90682 36.649 2.90682H31.4596L27.027 0.400119C26.0542 -0.133373 24.8107 -0.133373 23.8379 0.400119L19.4053 2.90682H14.3242C13.1888 2.90682 12.1622 3.49351 11.5675 4.45331L9.02696 8.77327L4.48653 11.3332C3.51375 11.8667 2.91915 12.9333 2.91915 14.0531V19.1734L0.43248 23.4402C0.162133 23.9201 0 24.4536 0 24.9867C0 25.5202 0.162133 26.0533 0.43248 26.5332L2.91915 30.8V35.9203C2.91915 37.0405 3.51377 38.0534 4.48653 38.6402L9.02696 41.2001L11.5675 45.5201C12.1082 46.4799 13.1892 47.0666 14.3242 47.0666H19.4053L23.8379 49.5733C24.3243 49.84 24.8651 50 25.4053 50C25.946 50 26.4863 49.84 26.9727 49.5733L31.4053 47.0666L36.7029 47.0673C37.8382 47.0673 38.8648 46.4806 39.4595 45.5208L42.054 41.0941L46.4323 38.5874C47.4051 38.0539 47.9997 36.9873 47.9997 35.8675V30.9076L50.5942 26.4277C51.1352 25.6271 51.1352 24.4536 50.5945 23.4938L50.5945 23.4937ZM27.5676 35.8139H23.5135V32.4005H27.5676V35.8139ZM27.6215 27.8138V29.787H23.5135V24.0805H25.5676C27.2432 24.0805 28.6489 22.6939 28.6489 21.0403C28.6489 19.387 27.2436 18 25.5676 18C23.892 18 22.4864 19.3866 22.4864 21.0403H18.3783C18.3783 17.147 21.6218 13.9469 25.5675 13.9469C29.5134 13.9469 32.7567 17.1471 32.7567 21.0403C32.7563 24.2405 30.5944 26.9603 27.6213 27.8138H27.6215Z"
                  fill="#FFB6AB"
                ></path>
              </svg>
              <div className="question__inner">
                <h3 className="question__title">
                  Will using Twicsy get my account banned?
                </h3>
                <div className="question__entry">
                  <p>
                    Never. Twicsy's experts understand precisely how Instagram
                    and its algorithm operate. Nothing that we do will violate
                    Insta's terms in any way that will endanger your account.
                    Your purchases, and your account, will stay safe and secure
                    throughout the process.
                  </p>
                  <p>
                    For best results, we also recommend&nbsp;<a
                      href="/buy-instagram-followers"
                      >buying Instagram followers</a
                    >,&nbsp;and&nbsp;<a href="/buy-instagram-likes"
                      >Instagram likes</a
                    >.
                  </p>
                </div>
                <button type="button"  onClick={btnSign6} className={style6?"btn-more question__btn is-active " :"btn-more question__btn "}>
                  <span></span>{style6?"Less":"More"}
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
