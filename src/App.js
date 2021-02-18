import React, { useEffect, useState } from "react";
import Profile from "./components/AboutMe/Index.js";
import Navbar from "./components/NavBar";
import MyProjects from "./components/MyProjects/index.js";
import Footer from "./components/Footer/index.js";
import Mystacks from "./components/MyStacks/index";
import ContactForm from "./components/ContactForm/index.js";
import Blogs from "./components/Blogs/Blogs.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Profile />
        <Mystacks />
        <MyProjects />
        <Blogs />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
