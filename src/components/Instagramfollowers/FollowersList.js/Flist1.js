import React from 'react'

export default function Flist1() {
  return (
    <div className="embla embla--alt slider-plans">
  <div className="slider__container embla__container is-draggable">
    <div
      className="slider__slides embla__slides"
      style={{ transform: "translate3d(0%, 0px, 0px)" }}
    >
      <div className="slider__slide embla__slide is-current-slide">
        <div className="plan is-active">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "50%" }} />
              <i>Save 50%</i>
            </div>
            <div className="plan__title">
              <strong>500</strong> Premium Followers
            </div>
            <div className="plan__price text-sm">
              <span>$23.98</span>{" "}
              <strong className="text-orange">$11.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/500-premium-followers"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide is-next-slide">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "58%" }} />
              <i>Save 58%</i>
            </div>
            <div className="plan__title">
              <strong>1000</strong> Premium Followers
            </div>
            <div className="plan__price text-sm">
              <span>$47.97</span>{" "}
              <strong className="text-orange">$19.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/1000-premium-followers"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "61%" }} />
              <i>Save 61%</i>
            </div>
            <div className="plan__title">
              <strong>2500</strong> Premium Followers
            </div>
            <div className="plan__price text-sm">
              <span>$119.92</span>{" "}
              <strong className="text-orange">$46.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/2500-premium-followers"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "63%" }} />
              <i>Save 63%</i>
            </div>
            <div className="plan__title">
              <strong>5000</strong> Premium Followers
            </div>
            <div className="plan__price text-sm">
              <span>$239.85</span>{" "}
              <strong className="text-orange">$88.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/5000-premium-followers"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="slider__cta embla__cta">
    <button className="slider__button slider__button--prev embla__button embla__prev is-disabled" />
    <button className="slider__button slider__button--next embla__button embla__next is-disabled" />
  </div>
</div>

  )
}
