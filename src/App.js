import React, { useEffect, useState } from "react";
import Profile from "./components/AboutMe/Index.js";
import Navbar from "./components/NavBar";
import MyProjects from "./components/MyProjects/index.js";
import Footer from "./components/Footer/index.js";
import Mystacks from "./components/MyStacks/index";
import ContactForm from "./components/ContactForm/index.js";

function App() {
  const [scrollStatus, setscrollStatus] = useState(false);
  const handleScroll = () => {
    const bottom = window.pageYOffset > document.body.scrollHeight - 600;
    if (bottom) {
      console.log("bottom");
      setscrollStatus(true);
    } else if (window.pageYOffset < 800) {
      setscrollStatus(false);
    }
    console.log(window.pageYOffset)
    console.log(window.parent.pageYOffset)
    console.log(document.body.clientHeight)

  };

  useEffect(()=>{
    document.addEventListener("scroll",handleScroll)
  },[])

  return (
    <div className="App" onScroll={handleScroll}>
      <Navbar />
        <Profile />
        <Mystacks />
        <MyProjects />
        <ContactForm />
        <Footer scrollStatus={scrollStatus}  />
      </div>
  );
}

export default App;
