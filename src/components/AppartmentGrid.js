import React from 'react'
import "./AppartmentGrid.css";
import Appartment from "./Appartment.js";

function AppartmentGrid() {
  return (
    <div className='grid'>
      <Appartment/>
      <Appartment/>
      <Appartment/>
      <Appartment/>
      <Appartment/>
      <Appartment/>
    </div>
  )
}

export default AppartmentGrid