import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./pages/Navbar";

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <div id="Home">
            <Home />
          </div>
          <div id="About">
            <About />
          </div>
          <div id="Projects">
            <Projects />
          </div>
          <div id="Contact">
            <Contact />
          </div>
        </div>
      </div>
  );
}

export default App;
