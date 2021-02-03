import React, { useState } from 'react';
import Profile from './components/AboutMe/Index.js'
import Navbar from './components/NavBar';
import MyProjects from './components/MyProjects/index.js';
import Footer from './components/Footer/index.js';
import Mystacks from './components/MyStacks/index';
import ContactForm from './components/ContactForm/index.js';



function App () {

  const [scrollStatus, setscrollStatus] = useState(false)
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop  === e.target.clientHeight;
    if (bottom) { 
        console.log("bottom")
        setscrollStatus(true)
    }else if(e.target.scrollTop < 500){
      setscrollStatus(false)
    }
 }

  return (
        <div className="App" onScroll={handleScroll}>
          <Navbar/>
          <Profile/>
          <Mystacks />
          <MyProjects/>
          <ContactForm/>
          <Footer scrollStatus={scrollStatus}/>
        
        </div>
    
  );
}

export default App;
