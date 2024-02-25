import React from 'react'
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import AppartmentGrid from './components/AppartmentGrid.js'
import "./App.css";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AppartmentGrid/>
      <Footer/>
    </div>
  )
}

export default App