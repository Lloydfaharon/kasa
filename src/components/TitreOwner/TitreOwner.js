





import React from 'react'
import './TitreOwner.css' // Importe les styles spécifiques au composant.

function TitreOwner(props) {
    return (
        // Conteneur principal du composant.
        <div className='apartment_section_right_left'>
          {/* Conteneur pour le titre, la localisation et les tags de l'appartement.*/}
          <div className='apartment_title'>
            {/* Affiche le titre de l'appartement passé en props. */}
            <h1>{props.title}</h1>
            {/* Affiche la localisation de l'appartement. */}
            <h2>{props.location}</h2>
            {/* Conteneur pour les tags de l'appartement. */}
            <div className='apartment_subtitle'>
              {/* Itère sur le tableau de tags et affiche chaque tag dans une div avec une classe 'box'. */}
              {props.tags.map((tag) =>(
                <div key={tag} className='box'>
                  <p>{tag}</p>
                </div>  
              ))}
            </div> 
          </div>
          {/* Conteneur pour les informations du propriétaire. */}
          <div className='apartment_owner'>
            <div className='apartment_owner_section' >
              {/* Affiche le nom du propriétaire. */}
              <h3>{props.host.name}</h3>
              {/* Conteneur pour l'image du propriétaire. */}
              <div className='apartment_owner_section_badge'>
                {/* Affiche l'image du propriétaire. */}
                <img src={props.host.picture} alt="owner"/>
              </div>
            </div>
            {/* Conteneur pour les étoiles de notation. */}
            <div className='apartment_owner_stars'>
              {/* Crée un tableau de 5 éléments pour représenter les étoiles. */}
              {[1, 2, 3, 4, 5].map((num) => (
                // Affiche une étoile pour chaque élément du tableau. La classe change en fonction de la note de l'appartement.
                <span key={num} className={props.rating >= num ? "on" : "off"}>★</span>
              ))}
            </div> 
          </div>
        </div>
    )
}

export default TitreOwner
