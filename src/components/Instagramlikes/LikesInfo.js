import React from 'react'

export default function LikesInfo() {
  return (
    <div
    className="tooltip-container"
    data-popper-reference-hidden="false"
    data-popper-escaped="false"
    data-popper-placement="bottom-end"
    data-popper-interactive="false"
    style={{
      position: "absolute",
      inset: "0px 0px auto auto",
      transform: "translate(-937px, 432px)"
    }}
  >
    <div className="tooltip-container__inner">
      <ul>
        <li>
          <h6>High Quality Likes</h6>
          <p>
            These are Likes with profile pictures but no further uploads on
            their account. Auto-refill is enabled within the warranty.
          </p>
        </li>
        <li>
          <h6>Premium Likes</h6>
          <p>
            Twicsy is now the only website to offer active likes. That's right —
            100% real Instagram likes, from 100% real Instagram users! Likes
            from real people really interested in your content. NO Drops!
          </p>
        </li>
      </ul>
    </div>
  </div>
  )
}
