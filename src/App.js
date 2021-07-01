import React from "react";
import Home from "./components/Home/Home"
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/AboutMe/About";
import ContactForm from './components/Contact/contactForm'
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
//import CV from './components/ResumeComponent/ReactPDF'

import { Fragment } from "react";

const App = () => {
  return (
    
      <div className="container">
        <Navbar />
        <Home />
        <About />
       
        <Portfolio />
        <ContactForm />
        <Footer />
        
      </div>
    
  );
};

export default App;