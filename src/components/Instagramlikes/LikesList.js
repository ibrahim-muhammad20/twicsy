import React,{useState} from 'react'
import Move1 from './NextMove/Move1';
import Move2 from './NextMove/Move2';

export default function LikesList() {
   
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
              <span style={{ width: "37%" }} />
              <i>Save 37%</i>
            </div>
            <div className="plan__title">
              <strong>50</strong> Premium Likes
            </div>
            <div className="plan__price text-sm">
              <span>$5.54</span>{" "}
              <strong className="text-orange">$3.49</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/50-premium-likes"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide is-next-slide">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "46%" }} />
              <i>Save 46%</i>
            </div>
            <div className="plan__title">
              <strong>100</strong> Premium Likes
            </div>
            <div className="plan__price text-sm">
              <span>$12.94</span>{" "}
              <strong className="text-orange">$6.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/100-premium-likes"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "55%" }} />
              <i>Save 55%</i>
            </div>
            <div className="plan__title">
              <strong>250</strong> Premium Likes
            </div>
            <div className="plan__price text-sm">
              <span>$28.87</span>{" "}
              <strong className="text-orange">$12.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/250-premium-likes"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "64%" }} />
              <i>Save 64%</i>
            </div>
            <div className="plan__title">
              <strong>500</strong> Premium Likes
            </div>
            <div className="plan__price text-sm">
              <span>$55.53</span>{" "}
              <strong className="text-orange">$19.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/500-premium-likes"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
    <div className="slider__cta embla__cta">
      <button className="slider__button slider__button--prev embla__button embla__prev is-disabled " />
      <button className="slider__button slider__button--next embla__button embla__next is-disabled " />
    </div>
  </div>
   
    
  )
}
