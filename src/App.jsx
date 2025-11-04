import React from 'react'
import './App.css'
import Home from './assets/components/Home.jsx'
import NavBar from './assets/components/NavBar.jsx'
import About from "./assets/components/About.jsx";
import Portfolio from "./assets/components/Portfolio.jsx";
import Contact from './assets/components/Contact.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact></Contact>
    </>
  );
}

export default App
