import React,{useState} from 'react'
import Move1 from './NextMove/Move1';
import Move2 from './NextMove/Move2';
import Move3 from './NextMove/Move3';
import Move4 from './NextMove/Move4';
import Move5 from './NextMove/Move5';
import Move6 from './NextMove/Move6';
import Move7 from './NextMove/Move7';
import Move8 from './NextMove/Move8';

export default function LikeList2() {
    const [click,setClick]=useState(1);
    const [clickp,setClickP]=useState(0);
    const btnClick=()=>{
        setClick(click+1);
        console.log(click)
      }
    const btnClickP=()=>{
        setClickP(clickp+1);
        console.log(clickp)
      }
  return (
    // This is High Quality like
    <div className="embla embla--alt slider-plans">
        {click==1?  <Move1/>:
         click==2? <Move2/>:
         click==3? <Move3/>:
         click==4? <Move4/>:
         click==5? <Move5/>:
         click==6? <Move6/>:
         click==7? <Move7/>:
         click==8? <Move8/>:<Move1/> }
         {click==9 && setClick(click-8)}

        {/* {clickp==0? <Move1/>:
         clickp==1? <Move8/>:
         clickp==2? <Move7/>:
         clickp==4? <Move6/>:
         clickp==5? <Move5/>:
         clickp==6? <Move4/>:
         clickp==7? <Move3/>:
         clickp==8? <Move2/>:<Move1/> }
         {clickp==9 && setClick(click-9)} */}




         {/* if click==1:
          if click==2:
            <Move3></Move3>
            else{
                Move1
            } <Move2></Move2>
         else{
          
         } */}
        {/* {click==2? <Move3/>:<Move2/>}
        {clickp==0? :<Move2/>} */}
        {/* {click==3? <Move3/>:<Move4/>}
        {click==4? <Move4/>:<Move5/>}
        {click==5? <Move5/>:<Move6/>}
        {click==5? <Move6/>:<Move7/>}
        {click==6? <Move7/>:<Move8/>} */}
   
    <div className="slider__cta embla__cta">
      <button onClick={btnClick} className="slider__button slider__button--prev embla__button embla__prev" />
      <button  onClick={btnClick} type='button' className="slider__button slider__button--next embla__button embla__next" />
    </div>
  </div>
  )
}
