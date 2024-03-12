import React from 'react'
import { Link } from 'react-router-dom';
import "./Appartment.css";

function Appartment(props) {
  
  const state = {appartmentId: props.id} // Définit un objet d'état contenant l'identifiant de l'appartement

  return (
    <Link to = "/apart" state={state}>{/* Crée un lien vers la page des détails de l'appartement */}
      <div className='appartment'>
        <img className="appartment_img" src={props.cover} alt="banner" /> {/* Affiche l'image de couverture de l'appartement */}
        {/*<div className='appartment_overlay'></div>*/}
        <h2 className='appartment_subtitre'>{props.title}</h2>  {/* Affiche le titre de l'appartement */}
      </div>
    </Link>
  )
}

export default Appartment // Exporte le composant