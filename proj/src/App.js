import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./pages/Navbar";
import Fixiths from "./pages/Fixiths";
import MoviesNMe from "./pages/MoviesNMe";
import TranaSolutions from "./pages/TranaSolutions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function MainPage(){
  return(
  <div className="main-page">
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
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
         <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/fixiths" element={<Fixiths />} />
            <Route path="/tranasolutions" element={<TranaSolutions />} />
            <Route path="/movies" element={<MoviesNMe />} />
          </Routes>
         </div>
      </div>
    </Router>
  );
}

export default App;
