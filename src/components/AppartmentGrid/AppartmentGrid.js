import React from 'react'
import "../AppartmentGrid/AppartmentGrid.css";
import Appartment from "../Appartment/Appartment.js";

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