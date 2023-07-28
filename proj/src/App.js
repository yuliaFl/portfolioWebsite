import React from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
