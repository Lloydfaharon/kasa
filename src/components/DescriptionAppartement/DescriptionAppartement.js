
import React, { useState } from 'react'; // Importe React et le Hook useState pour gérer l'état local du composant.
import './DescriptionAppartement.css'; // Importe le fichier CSS pour styliser le composant.

// Définit le composant fonctionnel `DescriptionAppartement` qui accepte des props.
export default function DescriptionAppartement(props) {
  const [isExpanded, setIsExpanded] = useState(false); // Initialise l'état `isExpanded` à false pour gérer la visibilité de la description.

  const toggleDescription = () => { // Définit une fonction pour basculer l'état de `isExpanded`.
    setIsExpanded(!isExpanded); // Inverse l'état de `isExpanded`.
  };

  return (
    // Rendu du composant
    <div className='apartment_description_section'> {/* Conteneur principal du composant.*/}

      <div className={`apartment_description_right ${isExpanded ? 'expanded' : ''}`} onClick={toggleDescription}>

        {/* Div qui peut être cliquée pour étendre/réduire la description. Utilise `isExpanded` pour ajouter la classe `expanded` si vrai.*/}

        <p className='description'>{props.title}</p> {/* Affiche le titre de la description.*/}

        <i className={`fa-solid fa-chevron-up ${isExpanded ? 'rotate' : ''}`}></i> {/* Icône de chevron qui tourne si la description est étendue.*/}

      </div>

      {isExpanded && ( // Affiche la description seulement si `isExpanded` est vrai.

        <div className='apartment_description_paragraph'> {/* Conteneur pour le paragraphe de la description.*/}

          <div>{props.content}</div> {/* Affiche le contenu de la description.*/}

        </div>
      )}
    </div>
  );
}
