import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import React,{useState,useEffect} from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import InstaFeeds from "./components/InstaFeeds";
import Instagram_followers from "./components/Instagramfollowers/Instagram_followers";
import Instagram_views from "./components/Instagramviews/Instagram_views";
import Instagrams_likes from "./components/Instagramlikes/Instagrams_likes";
import Contact from "./components/Contactus/Contact";
import Enter from "./components/EnterDetails/Enter";

import Checkout from "./components/EnterDetails/Check_out";




function App() {
  // const [mobile,setMobile]=useState(false);
  // const btnMobile=()=>{
  //  setMobile(mobile=>!mobile)
  //  document.getElementById(mobile);
  // if(mobile==true){
  //   var bd=document.body;
  //   bd.classList.add("mobile-nav-visible ,no-scroll");
  // }

  
  return (
    <>
    {/* <Paypal/> */}
    
   {/* <Enter/> */}
   {/* <Check_out/> */}
     {/* <header className="App-header" style={{textAlign:'center'}}>
        <h1>Instagram Feed with Instagram API</h1>
      </header>

      <InstaFeeds /> */}
      
    {/* <body  className={mobile?"mobile-nav-visible no-scroll":""}> */}
    <Router>

      <div className=" cs">
        <Navbar  />
      </div>
      <Routes>
         
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/buy-instagram-likes" element={<Instagrams_likes id={1}/>}></Route>
          <Route exact path="/buy-instagram-followers" element={<Instagram_followers id={2} /> }></Route>
          <Route exact path="/buy-instagram-views" element={ <Instagram_views id={3}/> }></Route>
          <Route exact path="/contact" element={ <Contact/> }></Route>
          <Route exact path="/Enterdetails" element={<Enter/> }>
           
          </Route>
          <Route  path="/Enterdetails/checkout" element={<Checkout/> }></Route>
          

      </Routes>


      
      <Footer />
      </Router> 
      {/* </body> */}
     
    {/* <Buy/> */}
    </>
  );
}

export default App;


