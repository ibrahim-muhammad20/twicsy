import React from 'react'

export default function FollowersInfo() {
  return (
    <div
    className="tooltip-container is-visible"
    data-popper-reference-hidden="false"
    data-popper-escaped="false"
    data-popper-placement="bottom-end"
    data-popper-interactive="false"
    style={{
      position: "absolute",
      inset: "0px 0px auto auto",
      transform: "translate(-945px, 432px)"
    }}
  >
    <div className="tooltip-container__inner">
      <ul>
        <li>
          <h6>High Quality</h6>
          <p>
            These are Followers with profile pictures but no further uploads on
            their account. Auto-refill is enabled within the warranty.
          </p>
        </li>
        <li>
          <h6>Premium Followers</h6>
          <p>
            Twicsy is now the only website to offer active followers. That's
            right — 100% real Instagram followers, from 100% real Instagram
            users! Followers from real people really interested in your content.
            NO Drops!
          </p>
        </li>
      </ul>
    </div>
  </div>
  )
}
