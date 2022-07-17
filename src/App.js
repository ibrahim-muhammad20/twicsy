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

import PaymentForm from "./components/Stripe/PaymentForm";

import CheckoutF from "./components/EnterDetailsF/CheckoutF";
import EnterF from "./components/EnterDetailsF/EnterF";
import StripeContainer from "./components/Stripe/StripeContainer";
import EnterV from "./components/EnterdetailsV/EnterV";
import CheckoutV from "./components/EnterdetailsV/CheckoutV";




function App() {
  // For likes
  const [drop, setDrop] = useState(false);
  const dropClick = () => {
    setDrop((drop) => !drop);
  };
  const [number1, setNumber1] = useState(11);
  const[prize,setPrize]=useState(1.49);
  const[likes,setLikes]=useState(50);
  const[username,setUsername]=useState("");
  
  function Userbtn(event){
    setUsername(event.target.value);
}
  function func1(e) {
    e.preventDefault();
    setNumber1(11);
    setPrize(1.47);
    setLikes(50);
    setDrop((drop) => !drop)
  }
  function func2(e) {
    e.preventDefault();
    setNumber1(12);
    setPrize(2.97);
    setLikes(100);
    setDrop((drop) => !drop)
  }
  function func3(e) {
    e.preventDefault();
    setNumber1(13);
    setPrize(5.49);
    setLikes(250);
    setDrop((drop) => !drop)
  }
  function func4(e) {
    e.preventDefault();
    setNumber1(14);
    setPrize(7.99);
    setLikes(500);
    setDrop((drop) => !drop)
  }
  function func5(e) {
    e.preventDefault();
    setNumber1(15);
    setPrize(12.99);
    setLikes(1000);
    setDrop((drop) => !drop)
  }
  function func6(e) {
    e.preventDefault();
    setNumber1(16);
    setPrize(28.99);
    setLikes(2500);
    setDrop((drop) => !drop)
  }
  function func7(e) {
    e.preventDefault();
    setNumber1(17);
    setPrize(49.99);
    setLikes(5000);
    setDrop((drop) => !drop)
  }
  function func8(e) {
    e.preventDefault();
    setNumber1(18);
    setPrize(88.99);
    setLikes(10000);
    setDrop((drop) => !drop)
  }

  // For Followers
  const [dropf, setDropf] = useState(false);
  const dropClickf = () => {
    setDropf((dropf) => !dropf);
  };
  const [number2, setNumber2] = useState(11);
  const[prizef,setPrizef]=useState(2.97);
  const[followers,setFollowers]=useState(100);
  const[usernamef,setUsernamef]=useState("");
  
  function Userbtnf(event){
    setUsernamef(event.target.value);
}
  function func1f(e) {
    e.preventDefault();
    setNumber2(11);
    setPrizef(1.47);
    setFollowers(100);
    setDropf((dropf) => !dropf)
  }
  function func2f(e) {
    e.preventDefault();
    setNumber2(12);
    setPrizef(5.49);
    setFollowers(250);
    setDropf((dropf) => !dropf)
  }
  function func3f(e) {
    e.preventDefault();
    setNumber2(13);
    setPrizef(7.99);
    setFollowers(500);
    setDropf((dropf) => !dropf)
  }
  function func4f(e) {
    e.preventDefault();
    setNumber2(14);
    setPrizef(12.99);
    setFollowers(1000);
    setDropf((dropf) => !dropf)
  }
  function func5f(e) {
    e.preventDefault();
    setNumber2(15);
    setPrizef(28.99);
    setFollowers(2500);
    setDropf((dropf) => !dropf)
  }
  function func6f(e) {
    e.preventDefault();
    setNumber2(16);
    setPrizef(49.99);
    setFollowers(5000);
    setDropf((dropf) => !dropf)
  }
  
  // For Views
  const [dropv, setDropv] = useState(false);
  const dropClickv = () => {
    setDropv((dropv) => !dropv);
  };
  const [number3, setNumber3] = useState(11);
  const[prizev,setPrizev]=useState(2.97);
  const[views,setViews]=useState(100);
  const[usernamev,setUsernamev]=useState("");
  
  function Userbtnv(event){
    setUsernamev(event.target.value);
}
  function func1v(e) {
    e.preventDefault();
    setNumber3(11);
    setPrizev(1.99);
    setViews(500);
    setDropv((dropv) => !dropv)
  }
  function func2v(e) {
    e.preventDefault();
    setNumber3(12);
    setPrizev(6.99);
    setViews(2500);
    setDropv((dropv) => !dropv)
  }
  function func3v(e) {
    e.preventDefault();
    setNumber2(13);
    setPrizev(14.99);
    setViews(5000);
    setDropv((dropv) => !dropv)
  }
  function func4v(e) {
    e.preventDefault();
    setNumber2(14);
    setPrizev(24.99);
    setViews(10000);
    setDropv((dropv) => !dropv)
  }
  function func5v(e) {
    e.preventDefault();
    setNumber2(15);
    setPrizev(49.99);
    setViews(25000);
    setDropv((dropv) => !dropv)
  }
  function func6v(e) {
    e.preventDefault();
    setNumber2(16);
    setPrizev(74.99);
    setViews(50000);
    setDropv((dropv) => !dropv)
  }
  

  
  return (
    <>
    {/* <StripeContainer/> */}
    {/* <StripeContainer/> */}
   
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

          {/* Enter details for likes */}

          <Route exact path="/Enterdetails" element={<Enter dropClick={dropClick} drop={drop}
           func1={func1} func2={func2}
           func3={func3} func4={func4} func5={func5} func6={func6} 
          func7={func7} func8={func8} likes={likes} 
          prize={prize} number1={number1} username={username} Userbtn={Userbtn} /> }>
          </Route>
          <Route  path="/Enterdetails/checkout" element={<Checkout likes={likes} prize={prize} username={username}  /> }></Route>

          {/* Enter details for followers */}

          <Route exact path="/Enterdetailsf" element={<EnterF dropClickf={dropClickf} dropf={dropf}
           func1f={func1f} func2f={func2f}
           func3f={func3f} func4f={func4f} func5f={func5f} func6f={func6f} 
          followers={followers} 
          prizef={prizef} number2={number2} usernamef={usernamef} Userbtnf={Userbtnf} /> }>
          </Route>
          <Route exact path="/Enterdetailsf/checkoutf" element={<CheckoutF followers={followers} prizef={prizef} usernamef={usernamef}  /> }></Route>
          
          {/* Enter details for Views */}

          <Route exact path="/Enterdetailsv" element={<EnterV dropClickv={dropClickv} dropv={dropv}
           func1v={func1v} func2v={func2v}
           func3v={func3v} func4v={func4v} func5v={func5v} func6v={func6v} 
          followers={followers} 
          prizev={prizev} number3={number3} views={views} Userbtnv={Userbtnv} /> }>
          </Route>
          <Route exact path="/Enterdetailsv/checkoutv" element={<CheckoutV views={views} prizev={prizev} usernamev={usernamev}  /> }></Route>
          

      </Routes>


      
      <Footer />
      </Router> 
     
    </>
  );
}

export default App;


