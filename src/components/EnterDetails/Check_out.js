import "./checkout.css"
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import StripeContainer from "../Stripe/StripeContainer";
import PaymentForm from "../Stripe/PaymentForm";

const PUBLIC_KEY = "pk_test_51LMC1UBzIrI8f3hBFOXEodV9ae4MrbaTUvgB00VUYMkHCGvfMPtviNSnphBhyIsZDunxsUWbiWMLiZn1KTpBA0q2000Dl9eN79";
const stripeTestPromise = loadStripe(PUBLIC_KEY)
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });



export default function Checkout(props) {
  var textstyle = {
    padding:"18px",
    color: "#0A7E7E"
  };
  const [paypal,setPaypal]=useState(false);
  const [stripe2,setStrip2]=useState(false);
  
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code:"USD",
            value: props.prize
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  
  return (
        
    <>
    <div id='f1'>
   <div className="header ">
  <div className="contain">
    <Link to="/Enterdetails" className="back">
      <span className="hidden-xs" style={{color:"white"}}>Back</span>
    </Link>
    <a href="/" className="logo">
    <img className='img' src="../logo/VI.png" alt="" />  
    </a>
  </div>
  <div className="progress">
    <div className="bar" />
    <div className="value" style={{ width: "75%" }} />
  </div>
  <div id="alerts"></div>
</div>
<form
  action=""
  method="POST"
  id="frmCheckout"
  className="container-lg upsell-off"
  data-cost="2.97"
>
  <input type="hidden" className="token" defaultValue="" />
  <div className="checkflex ftop">
    <div className="flex-c3">
      <div className="box order-review open">
        <div className="mobile-down">
          <div className="icon">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </div>
        </div>
        <div className="body">
          <div className="r-mobi">
            <div className="bars">
              <i className="fas fa-bars" aria-hidden="true" />
            </div>
            <div className="text">Order summary</div>
            <div className="price">
              <span className="total-cost-mini">${props.prize}</span>
            </div>
            <div className="arrow">
              <i className="far fa-angle-down" aria-hidden="true" />
            </div>
          </div>
          <div className="r-body">
            <hr className="show-sm" />
            <div className="r-user">
              <img
                className="user-image"
                src="../images/women.png"
              />
              <div className="info">
                <div className="name">@{props.username}</div>
                <div className="change">
                  <a href="/order/enter-details" style={{color:"white"}}>Change username</a>
                </div>
              </div>
            </div>
            <hr />
            <div className="r-plan">
              <div className="r-item">
                <div className="icon">
                  <div className="icon">
                    <i className="far fa-heart icon" aria-hidden="true" />
                  </div>{" "}
                </div>
                <div className="info">
                  <span>
                    <strong>{props.likes}</strong> likes 
                  </span>
                  <div className="extra">
                    <strong>{props.likes}</strong> likes / <strong>1</strong> posts
                  </div>
                </div>
                <div className="price">${props.prize}</div>
              </div>
              <div className="r-item upsell">
                <div className="icon">
                  <div className="icon">
                    <i className="far fa-heart icon" aria-hidden="true" />
                  </div>{" "}
                </div>
                <div className="info">
                  <span>
                    <strong>50</strong> likes per post
                  </span>{" "}
                  <a href="#" className="remove">
                    <i className="far fa-times" aria-hidden="true" />
                  </a>
                </div>
                <div className="price">$1.11</div>
              </div>
            </div>
            <div className="r-upsell" data-id={1} data-cost="1.11">
              <div className="line">
                <div className="icon">
                  <i className="far fa-heart icon" aria-hidden="true" />
                </div>{" "}
                <div className="text">
                  Add <strong>50</strong> likes per post and{" "}
                  <strong>save 25%</strong>
                </div>
              </div>
              <div className="btn btn-md btn-green">
                <i className="fas fa-plus" aria-hidden="true" /> Add for $1.11{" "}
                <span className="strike">$1.49</span>
              </div>
            </div>
            <div className="r-offeradd" data-cost="3.84">
              <strong className="line">Special offer</strong>
              <strong className="price">$3.84</strong>
            </div>
            <div className="r-coupon">
              <strong className="line">Discount</strong>
              <strong className="total-discount price" />
            </div>
            <div className="r-total">
              <strong className="line">Total to pay </strong>
              <strong className="total-cost price">{"="} ${props.prize}</strong>
            </div>
            <hr className="hide-sm" />
            <div className="r-feature">
              <div className="item ">
                <div className="icon">
                  <i className="far fa-user" aria-hidden="true" />
                </div>
                <div className="text">
                  <strong>Real likes</strong> from real people
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i className="far fa-images" aria-hidden="true" />
                </div>
                <div className="text">
                  <strong>Split likes</strong> on multiple posts
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i className="far fa-eye" aria-hidden="true" />
                </div>
                <div className="text">
                  <strong>Video views</strong> included
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i className="far fa-unlock" aria-hidden="true" />
                </div>
                <div className="text">
                  <strong>No Instagram password</strong> required
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i className="far fa-tachometer-alt" aria-hidden="true" />
                </div>
                <div className="text">
                  <strong>Fast delivery,</strong> up to 10 mins
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i className="far fa-life-ring" aria-hidden="true" />
                </div>
                <div className="text">
                  <strong>24/7</strong> support
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
    <div className="flex-c1">
      <div className="box ccheckout">
        <div className="heading dleft">
          <div className="title">Checkout</div>
          <hr />
        </div>
        <div className="body">
          <div className="alerts"></div>
          <div className="chk-applepay">
            <h3>
              Pay with Apple Pay
              <span className="secure lg" />
            </h3>
            <div className="ap-body">
              <div className="btnApplePay" />
            </div>
            <div className="or-line">
              <span>OR</span>
            </div>
          </div>
          <h3>
            Pay with credit / debit card
            <span className="secure lg" />
            <div className="cards">
              <svg
                width={42}
                height={29}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>American Express</title>
                <path
                  d="M34.666 1H7.327C3.833 1 1 3.772 1 7.19v14.6c0 3.418 2.833 6.19 6.327 6.19h27.338c3.495 0 6.328-2.772 6.328-6.19V7.19c0-3.417-2.833-6.19-6.328-6.19h.001Z"
                  fill="#26A6D1"
                  stroke="#D7D7D7"
                  strokeWidth=".52"
                />
                <path
                  d="m8.142 10.343-3.748 8.3h4.487l.557-1.324h1.271l.556 1.324h4.94v-1.01l.44 1.01h2.554l.44-1.032v1.032h10.272l1.25-1.29 1.169 1.29 5.276.01-3.76-4.137 3.76-4.173h-5.194l-1.216 1.265-1.133-1.265H18.89l-.96 2.142-.982-2.142H12.47v.976l-.498-.976h-3.83Zm.869 1.179h2.187l2.486 5.628v-5.628h2.396L18 15.557l1.77-4.035h2.384v5.955h-1.45l-.012-4.667-2.115 4.667h-1.298l-2.127-4.667v4.667h-2.984l-.566-1.335H8.546l-.565 1.334H6.382l2.629-5.954Zm14.47 0h5.899l1.804 1.95 1.862-1.95h1.804l-2.74 2.993 2.74 2.959h-1.886L31.16 15.5l-1.871 1.973H23.48v-5.952Zm-13.406 1.007-1.007 2.379h2.013l-1.006-2.379Zm14.863.226v1.087h3.218v1.212h-3.218v1.187h3.61l1.677-1.749-1.607-1.738h-3.68Z"
                  fill="#fff"
                />
              </svg>
              <svg
                width={42}
                height={29}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Visa Card</title>
                <path
                  d="M34.666 1H7.327C3.833 1 1 3.772 1 7.19v14.604c0 3.418 2.833 6.19 6.327 6.19h27.338c3.495 0 6.328-2.772 6.328-6.19V7.19c0-3.418-2.833-6.19-6.328-6.19Z"
                  fill="#FFF"
                  stroke="#D7D7D7"
                  strokeWidth=".52"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.24 19.195h-2.392L9.055 12.5c-.086-.308-.266-.58-.532-.709a7.909 7.909 0 0 0-2.193-.708v-.258h3.854c.531 0 .93.387.997.837l.93 4.83 2.391-5.667h2.326l-3.588 8.37Zm4.917 0h-2.259l1.86-8.37h2.26l-1.86 8.37Zm4.782-6.052c.067-.451.466-.709.931-.709a4.29 4.29 0 0 1 2.193.386l.399-1.802a5.832 5.832 0 0 0-2.06-.387c-2.193 0-3.788 1.16-3.788 2.768 0 1.224 1.13 1.867 1.928 2.254.863.386 1.195.644 1.129 1.03 0 .58-.665.837-1.329.837a5.803 5.803 0 0 1-2.325-.516l-.4 1.803c.798.322 1.662.451 2.46.451 2.458.064 3.986-1.094 3.986-2.833 0-2.189-3.124-2.317-3.124-3.282Zm11.031 6.052-1.793-8.37H30.25c-.399 0-.798.258-.93.644l-3.323 7.726h2.326l.464-1.223h2.858l.266 1.223h2.06Zm-3.388-6.117.663 3.154h-1.86l1.197-3.154Z"
                  fill="#172B85"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height={29}
                width={42}
              >
                <title>MasterCard</title>
                <path
                  d="M34.79 1H7.453C3.958 1 1.125 3.771 1.125 7.19v14.603c0 3.419 2.833 6.19 6.327 6.19H34.79c3.495 0 6.328-2.771 6.328-6.19V7.19c0-3.42-2.833-6.19-6.328-6.19Z"
                  fill="#FFF"
                  stroke="#D7D7D7"
                  strokeWidth=".52"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.315 22.252c4.247 0 7.69-3.411 7.69-7.619 0-4.207-3.443-7.618-7.69-7.618a7.701 7.701 0 0 0-4.99 1.822A7.701 7.701 0 0 0 16.34 7.02c-4.247 0-7.69 3.41-7.69 7.618s3.443 7.619 7.69 7.619a7.702 7.702 0 0 0 4.99-1.823 7.701 7.701 0 0 0 4.985 1.818Z"
                  fill="#ED0006"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.334 20.429a7.574 7.574 0 0 0 .001-11.597 7.573 7.573 0 0 0-.001 11.597Z"
                  fill="#FF603C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.33 20.432a7.574 7.574 0 0 0 0-11.597 7.701 7.701 0 0 1 4.988-1.82c4.246 0 7.69 3.41 7.69 7.618s-3.444 7.619-7.69 7.619a7.702 7.702 0 0 1-4.988-1.82Z"
                  fill="#F9A000"
                />
              </svg>
              <svg
                width={41}
                height={28}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Diners Club Card</title>
                <path
                  d="M34.027.452H6.689C3.194.452.36 3.223.36 6.642v14.604c0 3.418 2.833 6.19 6.328 6.19h27.338c3.494 0 6.327-2.772 6.327-6.19V6.642c0-3.419-2.833-6.19-6.327-6.19Z"
                  fill="#FDFDFD"
                  stroke="#D7D7D7"
                  strokeWidth=".52"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.729 22.22h2.912c4.545 0 8.168-3.548 8.31-7.931v-.07c-.071-4.453-3.765-8.07-8.31-8.001h-3.267c-4.332.14-7.74 3.757-7.598 8.07 0 4.314 3.55 7.863 7.953 7.932Zm-6.533-8c0-3.618 3.053-6.61 6.746-6.61 3.693 0 6.747 2.992 6.747 6.61 0 3.618-3.054 6.61-6.747 6.61s-6.746-2.992-6.746-6.61Zm7.812 4.452V9.836c2.485.627 4.047 3.062 3.409 5.497-.426 1.67-1.705 2.922-3.41 3.34Zm-5.469-5.566c-.639 2.435.852 4.94 3.338 5.566V9.836c-1.634.418-2.912 1.67-3.338 3.27Z"
                  fill="#1B79BE"
                />
              </svg>
            </div>
          </h3>
          <button onClick={(e)=>{e.preventDefault()
            setPaypal(paypal=>!paypal)}}  type="submit" className="btn btn-block btn-pay" style={{background:"#ffaa08"}}>
            Pay ${props.prize} USD Using Paypal
            {/* <span className="">
              Pay 
            </span> */}
          </button>
          {paypal &&  <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />}
          <button onClick={(e)=>{e.preventDefault()
            setStrip2(stripe2=>!stripe2)}}  type="submit"  className="btn btn-block btn-pay" style={{background:"#101820FF"}}>
            Pay ${props.prize} USD Using Stripe
            {/* <span className="">
              Pay 
            </span> */}
          </button>
          {stripe2 && <Elements stripe={stripeTestPromise}>
			<PaymentForm prize={props.prize}/>
		</Elements> }
         
      
         
         
          {/* <Paypal/> */}
          
        
          
          <div className="agree">
            By completing your order, you agree to the{" "}
            <a href="https://twicsy.com/terms" target="_blank">
              terms of services
            </a>{" "}
            and{" "}
            <a href="https://twicsy.com/privacy-policy" target="_blank">
              privacy policy
            </a>
            .
            <span className="warn-curr" style={{}}>
              <br />
              <br />
              <strong>All pricing is in USD.</strong> If paying with a different
              currency, the billed amount is subject to exchange rates and
              additional fees.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="PostCheckoutOffer" className="modal" tabIndex={-1} role="dialog">
    <div id="preoffer">
      <div className="offer-wrap">
        <div className="offer-head">
          <img src="/assets/img/checkout/logo.svg" alt="Twicsy" />
        </div>
        <div className="offer-body">
          <div className="preline">
            <b>
              <span className="highlight">@ibbibhai</span>, hang on!
            </b>{" "}
            We have a one-time
            <br /> exclusive offer for you.
          </div>
          <div className="box">
            <div id="OfferPrompt" className="body">
              <div className="title">
                Extra Discount to
                <br /> Compliment Your Purchase
              </div>
              <div className="subtitle">
                Gain <b>Maximum Engagment</b> with
                <br /> <b className="highlight">30% off followers</b> if added
                now.
              </div>
              <div className="items">
                <div className="items-inner">
                  <div className="item">
                    <div className="tag">
                      <span>Your Order</span>
                    </div>
                    <div className="icon">
                      <i className="far fa-heart icon" aria-hidden="true" />
                    </div>
                    <div className="desc">{props.likes}</div>
                    <div className="price">
                      <b className="total-cost-mini">$2.97</b>
                    </div>
                  </div>
                  <div className="plus">+</div>
                  <div className="item item-offer">
                    <div className="tag">
                      <span>Save 30%</span>
                    </div>
                    <div className="icon">
                      <i className="far fa-user icon" aria-hidden="true" />
                    </div>
                    <div className="desc">
                      <span>250 followers</span>
                    </div>
                    <div className="price">
                      <b>+$3.84</b> <span>$5.49</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="save">
                You save: <span>$1.65</span>
                <br />
              </div>
              <div className="cta">
                <a href="javascript:;" className="offer-accept">
                  <div className="line1">
                    <i className="fas fa-check-circle" aria-hidden="true" />{" "}
                    Yes, Upgrade My Order Now
                  </div>
                  <div className="line2">
                    Real Followers will be delivered gradually
                  </div>
                </a>
              </div>
              <div className="reject">
                <a href="javascript:;" className="offer-reject">
                  No thanks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

</div>
</>
 
  )
}
