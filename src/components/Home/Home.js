import React from 'react'
import Boost from './boost'
import Boost2 from './boost2'
import Popularity from './popularity'
import Packages from './packages'
import Choose from './Choose'
import Customer from '../customer'

export default function Home() {
  return (
    <div>
      <Boost />
      <Boost2 />
      <Popularity />
      <Packages />
      <Choose />
      <Customer/>
      {/* <Customer2/> */}
      {/* <Customer/> */}
    </div>
  )
}
