import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Customer from "./components/customer";
import Packages from "./components/packages";
import Popularity from "./components/popularity";
import Boost from "./components/boost";
import Boost2 from "./components/boost2";
import Navbar from "./components/Navbar";
import Choose from "./components/Choose";

function App() {
  return (
    <>
      <div className=" cs">
        <Navbar />
      </div>

      <Boost />
      <Boost2 />
      <Popularity />
      <Packages />
      <Choose />
      <Customer />
      <Footer />
    </>
  );
}

export default App;
