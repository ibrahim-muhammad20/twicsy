import React from 'react'
import Hero_views from './Hero_views'
import Views_Questions from './Views_Questions'
import Buy from '../Buy'
import Customer from '../customer';


export default function Instagram_views(props) {
  const Buys= require("../Buy2.json");
  const filterDropdown = Buys.filter(function(result) {
    return result.id === props.id;
  });
  return (
    <div>
        <Hero_views/>
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
        <Views_Questions/>
        <Customer/>
    </div>
  )
}
