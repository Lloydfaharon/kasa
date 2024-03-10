import React from 'react'
import Banner from '../components/Banner/Banner.js';
import AppartmentGrid from '../components/AppartmentGrid/AppartmentGrid.js'
import "./App.css";

function App() {
  const imageSrc = "/image/bannersrc.png"
  return (
    <div>
      <Banner showText={true} imageSrc={imageSrc}/>
      <AppartmentGrid/>
    </div>
  )
}
export default App