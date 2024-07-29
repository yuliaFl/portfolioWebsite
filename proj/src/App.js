import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import './index.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
