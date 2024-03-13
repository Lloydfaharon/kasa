import React from 'react';
import { Link } from 'react-router-dom';
import "./Appartment.css";

function Appartment(props) {
  // Utilisez directement l'ID de l'appartement pour construire le lien
  return (
    <Link to={`/apart/${props.id}`}> {/* Modifiez le chemin pour inclure l'ID de l'appartement */}
      <div className='appartment'>
        <img className="appartment_img" src={props.cover} alt="banner" /> {/* Affiche l'image de couverture de l'appartement */}
        <h2 className='appartment_subtitre'>{props.title}</h2>  {/* Affiche le titre de l'appartement */}
      </div>
    </Link>
  );
}

export default Appartment; // Exporte le composant
