import React from 'react'
import { Link } from 'react-router-dom';
import "./Appartment.css";

function Appartment() {
  return (
    <Link to = "/apart">
      <div className='appartment'>
        <div className='appartment_subtitre'>Titre de la location</div>
      </div>
    </Link>
  )
}

export default Appartment