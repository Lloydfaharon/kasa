import React, { useState } from 'react';
import './DescriptionAppartement.css';

export default function DescriptionAppartement(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='apartment_description_section'>
      <div className={`apartment_description_right ${isExpanded ? 'expanded' : ''}`} onClick={toggleDescription}>
        <p className='description'>{props.title}</p>
        <i className={`fa-solid fa-chevron-up ${isExpanded ? 'rotate' : ''}`}></i>
      </div>
      {isExpanded && (
        <div className='apartment_description_paragraph'>
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
}
