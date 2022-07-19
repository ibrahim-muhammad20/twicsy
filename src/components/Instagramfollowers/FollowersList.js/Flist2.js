import React,{useState} from 'react'
import FMove1 from './FollowersMove.js/FMove1';
import FMove2 from './FollowersMove.js/FMove2';
import FMove3 from './FollowersMove.js/FMove3';
import FMove4 from './FollowersMove.js/FMove4';
import FMove5 from './FollowersMove.js/FMove5';
import FMove6 from './FollowersMove.js/FMove6';

export default function Flist2() {
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
    <div className="embla embla--alt slider-plans">
      <div className="slider__container embla__container2 is-draggable">
        {click==1?  <FMove1/>:
         click==2?  <FMove2/>:
         click==3?  <FMove3/>:
         click==4?  <FMove4/>:
         click==5?  <FMove5/>:
         click==6?  <FMove6/>:<FMove1/> }
         {click==7 && setClick(click-6)}
         </div>

    <div className="slider__cta embla__cta">
    <button onClick={btnClick} className="slider__button slider__button--prev embla__button embla__prev" />
      <button  onClick={btnClick} type='button' className="slider__button slider__button--next embla__button embla__next" />
    </div>
  </div>
  )
}
