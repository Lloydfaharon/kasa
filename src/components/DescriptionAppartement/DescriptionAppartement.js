
import React, { useState } from 'react'; 
import './DescriptionAppartement.css'; 

// Définit le composant fonctionnel `DescriptionAppartement` qui accepte des props.
export default function DescriptionAppartement(props) {
  const [isExpanded, setIsExpanded] = useState(false); 

  const toggleDescription = () => { 
    setIsExpanded(!isExpanded); 
  };

  return (
    // Rendu du composant
    <div className='apartment_description_section'> 

      <div className={`apartment_description_right ${isExpanded ? 'expanded' : ''}`} onClick={toggleDescription}>

        

        <p className='description'>{props.title}</p> 

        <i className={`fa-solid fa-chevron-up ${isExpanded ? 'rotate' : ''}`}></i> 

      </div>

      {isExpanded && ( 

        <div className='apartment_description_paragraph'> 

          <div>{props.content}</div> 

        </div>
      )}
    </div>
  );
}
