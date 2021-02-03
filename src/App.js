import React,{Component} from 'react';
import Profile from './components/AboutMe/Index.js'
import Navbar from './components/NavBar';
import MyProjects from './components/MyProjects/index.js';
import Footer from './components/Footer/index.js';
import Mystacks from './components/MyStacks/index';
import ContactForm from './components/ContactForm/index.js';



class App extends Component {

 
  render(){
  return (
        <div className="App">
          <Navbar/>
          <Profile/>
          <Mystacks />
          <MyProjects/>
          <ContactForm/>
          <Footer/>
        
        </div>
    
  );
}
}

export default App;
