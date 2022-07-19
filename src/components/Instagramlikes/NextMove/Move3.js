import React from 'react'
import {motion} from "framer-motion";
export default function Move3() {
  return (
    <motion.div className="slider__container embla__container is-draggable"
    drag="x"
    dragConstraints={{
      left:-240,
      right:0


    }}>
    <div
      className="slider__slides embla__slides"
      style={{ transform: "translate3d(-40%, 0px, 0px)" }}
    >
      <div className="slider__slide embla__slide" style={{ left: "0%" }}>
        <div className="plan is-active">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "26%" }} />
              <i>
                Save {/* */}26{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>50</strong> {/* */}Likes
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}1.99</span>{" "}
              <strong className="text-orange">${/* */}1.47</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/50-likes"
            />
          </div>
        </div>
      </div>
      <div
        className="slider__slide embla__slide is-prev-slide"
        style={{ left: "0%" }}
      >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "25%" }} />
              <i>
                Save {/* */}25{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>100</strong> {/* */}Likes
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}3.98</span>{" "}
              <strong className="text-orange">${/* */}2.97</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/100-likes"
            />
          </div>
        </div>
      </div>
      <div
        className="slider__slide embla__slide is-current-slide"
        style={{ left: "0%" }}
      >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "45%" }} />
              <i>
                Save {/* */}45{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>250</strong> {/* */}Likes
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}9.95</span>{" "}
              <strong className="text-orange">${/* */}5.49</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/250-likes"
            />
          </div>
        </div>
      </div>
      <div
        className="slider__slide embla__slide is-next-slide"
        style={{ left: "0%" }}
      >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "60%" }} />
              <i>
                Save {/* */}60{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>500</strong> {/* */}Likes
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}19.90</span>{" "}
              <strong className="text-orange">${/* */}7.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/500-likes"
            />
          </div>
        </div>
      </div>
      <div
        className="slider__slide embla__slide is-selected"
        style={{ left: "0%" }}
      >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "67%" }} />
              <i>
                Save {/* */}67{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>1000</strong> {/* */}Likes
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}39.80</span>{" "}
              <strong className="text-orange">${/* */}12.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/1000-likes"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide is-selected">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "71%" }} />
              <i>
                Save {/* */}71{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>2500</strong> {/* */}Likes
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}99.51</span>{" "}
              <strong className="text-orange">${/* */}28.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/2500-likes"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide is-selected">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "75%" }} />
              <i>
                Save {/* */}75{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>5000</strong> {/* */}Likes
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}199.02</span>{" "}
              <strong className="text-orange">${/* */}49.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/5000-likes"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide">
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "78%" }} />
              <i>
                Save {/* */}78{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>10000</strong> {/* */}Likes
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}398.05</span>{" "}
              <strong className="text-orange">${/* */}88.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/10000-likes"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}
