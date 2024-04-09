import React, { useState } from 'react';
import './BannerImage.css'; 

function BannerImage(props) {
  const picture = props.pictures; // Récupère le tableau des images passées en prop
  const [currentPictures, setCurrentPictures] = useState(0); 

  // Fonction pour déterminer la classe CSS de chaque image
  const getClassName = (i) => {
    if (i === currentPictures) return "visible"; 
    return "hidden"; 
  };

  // Fonction pour passer à l'image suivante
  const goToNextPicture = () => {
    setCurrentPictures((prevIndex) => (prevIndex === picture.length - 1 ? 0 : prevIndex + 1));
  };

  // Fonction pour revenir à l'image précédente
  const goToPrevPicture = () => {
    setCurrentPictures((prevIndex) => (prevIndex === 0 ? picture.length - 1 : prevIndex - 1));
  };
  
  // Condition pour déterminer si la navigation (flèches/précédent, suivant) doit être affichée
  const showNavigation = picture.length > 1;

  return (
    <div className='banner_image'>
      {showNavigation && (
        <div className='arrow'>
          <img className='arrow_left' src='/image/arrow_left.png' alt='fleche gauche' onClick={goToPrevPicture} />
          <img className='arrow_right' src='/image/arrow_right.png' alt='fleche droite' onClick={goToNextPicture} />
        </div>
      )}
  
      
      {showNavigation && (
        <div className='counter_container'>
          <span className='image_counter'>{currentPictures + 1}/{picture.length}</span>
        </div>
      )}
      
      
      <div className='banner_image_container'>
        
        {picture.map((pic, i) => (
          <img key={i} src={pic} alt={`Slide ${i}`} className={getClassName(i)} />
        ))}
      </div>
    </div>
  );
}

export default BannerImage;


