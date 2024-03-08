import React from 'react'
import { Link } from 'react-router-dom';
import "./Appartment.css";

function Appartment(props) {
  
  const state = {appartmentId: props.id}

  return (
    <Link to = "/apart" state={state}>
      <div className='appartment'>
        <img className="appartment_img" src={props.cover} alt="banner" />
        {/*<div className='appartment_overlay'></div>*/}
        <h2 className='appartment_subtitre'>{props.title}</h2>
      </div>
    </Link>
  )
}

export default Appartment