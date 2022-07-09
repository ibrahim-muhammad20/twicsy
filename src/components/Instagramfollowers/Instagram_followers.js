import React,{useState} from 'react'
import Followers_Questions from './Followers_Questions'
import Hero_followers from './Hero_followers'

import Buy from '../Buy'
import Customer from '../customer';

export default function Instagram_followers(props) {
  // const [result,setResult]=useState([])
  const Buys= require("../Buy2.json");
  // setResult(Buys)
  const filterDropdown = Buys.filter(function(result) {
    return result.id === props.id;
  });
  
  return (
    <div>
       <Hero_followers/>
      
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
       <Followers_Questions/>
       <Customer/>
    </div>
  )
}
