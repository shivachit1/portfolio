import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import SkillsComponent from './components/SkillsComponent';


class App extends Component {

 
  render(){
  return (
   <div>
        <div className="page-container">
          <Profile/>
          <SkillsComponent />
          <ProjectList/>
          <Contact/>
        
        </div>
      </div>
    
  );
}
}

export default App;
