import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePageComponent from './components/HomePageComponent';
import AppNavbar from './components/AppNavbar';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import SkillsComponent from './components/SkillsComponent';
import AboutMe from './components/AboutMe';


class App extends Component {

 
  render(){
  return (
   <div>
        <AppNavbar/>
        <div className="page-container">
          <HomePageComponent/>
          <SkillsComponent />
          <ProjectList/>
         
          <Contact/>
        
        </div>
      </div>
    
  );
}
}

export default App;
