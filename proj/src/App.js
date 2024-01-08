import React from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Projects/>  
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
