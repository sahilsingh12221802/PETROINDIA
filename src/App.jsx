import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;