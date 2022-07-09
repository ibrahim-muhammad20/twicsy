// import './Enter.css';
import React from 'react'


export default function Enterdetails() {
  return (
    <div>
      <>
  {/* Hello world */}
  
  
  <div className="container-lg step1">
    <div className="checkflex">
      <div className="flex-c1">
        <div className="box">
          <div className="heading">
            <div className="title">Get started</div>
            <hr />
          </div>
          <div className="body">
            <form id="frmDetails" className="form " method="POST" action="">
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
                  <input type="hidden" name="plan" defaultValue={11} />
                  <button type="button" className="form-control">
                    <strong>50</strong> likes <span className="alt">$1.47</span>
                  </button>
                  <div className="dropdown-menu">
                    <a href="#" data-value={11}>
                      <span className="desc">
                        <strong>50</strong> likes{" "}
                      </span>
                      <span className="alt">$1.47</span>
                    </a>
                    <a href="#" data-value={12}>
                      <span className="desc">
                        <strong>100</strong> likes{" "}
                      </span>
                      <span className="alt">$2.97</span>
                    </a>
                    <a href="#" data-value={13}>
                      <span className="desc">
                        <strong>250</strong> likes{" "}
                      </span>
                      <span className="alt">$5.49</span>
                    </a>
                    <a href="#" data-value={14}>
                      <span className="desc">
                        <strong>500</strong> likes{" "}
                      </span>
                      <span className="alt">$7.99</span>
                    </a>
                    <a href="#" data-value={15}>
                      <span className="desc">
                        <strong>1000</strong> likes{" "}
                      </span>
                      <span className="alt">$12.99</span>
                    </a>
                    <a href="#" data-value={16}>
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
                    <span>Send me special promotions and discounts</span>
                  </label>
                </div>
              </div>
              <div className="button-group">
                <button type="submit" className="btn btn-block" disabled="">
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
            <strong>Evelyn R.</strong>
          </div>
        </div>{" "}
      </div>
    </div>
  </div>
</>

    </div>
  )
}
