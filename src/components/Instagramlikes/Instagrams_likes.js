import React from 'react'
import Hero_likes from './Hero_likes'
import Likes_Questions from './Likes_Questions'
import Buy from '../Buy'
import Customer from '../customer';
export default function Instagrams_likes(props) {
  const Buys= require("../Buy2.json");
  // setResult(Buys)
  const filterDropdown = Buys.filter(function(result) {
    return result.id === props.id;
  });
  return (
    <div>            
              <Hero_likes/>
 {filterDropdown.map((items)=>{
  return(
          <Buy    
          h1={items.h1}
          P1={items.P1}
          P2={items.P2}
          P3={items.P3}
          h2={items.h2}      
          P4={items.P4}
          h3={items.h3}
          P5={items.P5}         
          h4={items.h4}         
          P6={items.P6}
          P7={items.P7}           
          /> 
       )
       })}
        <Likes_Questions/>
        <Customer/>
    </div>
  )
}
