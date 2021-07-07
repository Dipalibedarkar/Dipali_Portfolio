import React from "react";
import Home from "./components/Home/Home"
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/AboutMe/About";
import ContactTitle from './components/Contact/contact'
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import WireframeTitle from './components/wireframe/wireframHeading'

import { Fragment } from "react";

const App = () => {
  return (
    
      <div className="container">
      
        <Navbar />
        <Home />
        <About />       
        <Portfolio />
        <WireframeTitle />
        <ContactTitle />
        <Footer />
        
      </div>
    
  );
};

export default App;