import React from 'react'

import Enterdetails from './Enterdetails'
import EnterNavbar from './EnterNavbar'

export default function Enter(props) {
  return (
    <div>
      <EnterNavbar/>
      <Enterdetails drop={props.drop} dropClick={props.dropClick}
       func1={props.func1} func2={props.func2} func3={props.func3} func4={props.func4} func5={props.func5} func6={props.func6} 
      func7={props.func7} func8={props.func8} likes={props.likes}
      prize={props.prize} number1={props.number1} username={props.username} Userbtn={props.Userbtn} />
    </div>
  )
}
