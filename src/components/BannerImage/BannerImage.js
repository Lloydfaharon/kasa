import React, { useState } from 'react';
import './BannerImage.css'; // Importe le fichier CSS pour le style du composant

function BannerImage(props) {
  const picture = props.pictures; // Récupère le tableau des images passées en prop
  const [currentPictures, setCurrentPictures] = useState(0); // État pour gérer l'image actuellement affichée

  // Fonction pour déterminer la classe CSS de chaque image
  const getClassName = (i) => {
    if (i === currentPictures) return "visible"; // Si l'index de l'image correspond à l'image actuelle, elle est "visible"
    return "hidden"; // Sinon, l'image est "cachée"
  };

  // Fonction pour passer à l'image suivante
  const goToNextPicture = () => {
    // Met à jour l'index de l'image actuelle, retourne au début si on est à la dernière image
    setCurrentPictures((prevIndex) => (prevIndex === picture.length - 1 ? 0 : prevIndex + 1));
  };

  // Fonction pour revenir à l'image précédente
  const goToPrevPicture = () => {
    // Met à jour l'index de l'image actuelle, va à la dernière image si on est à la première
    setCurrentPictures((prevIndex) => (prevIndex === 0 ? picture.length - 1 : prevIndex - 1));
  };
  
  // Condition pour déterminer si la navigation (flèches/précédent, suivant) doit être affichée
  const showNavigation = picture.length > 1;

  return (
    <div className='banner_image'>
      {/* Affiche les flèches de navigation si nécessaire.*/}
      {showNavigation && (
        <div className='arrow'>
          {/* Flèche gauche pour aller à l'image précédente.*/}
          <img className='arrow_left' src='/image/arrow_left.png' alt='fleche gauche' onClick={goToPrevPicture} />
          {/* Flèche droite pour aller à l'image suivante.*/}
          <img className='arrow_right' src='/image/arrow_right.png' alt='fleche droite' onClick={goToNextPicture} />
        </div>
      )}
  
      {/* Affiche le compteur d'images si la navigation est activée.*/}
      {showNavigation && (
        <div className='counter_container'>
          <span className='image_counter'>{currentPictures + 1}/{picture.length}</span>
        </div>
      )}
      
      {/* Conteneur pour les images de la bannière.*/}
      <div className='banner_image_container'>
        {/* Génère une img pour chaque élément dans `picture`.*/}
        {picture.map((pic, i) => (
          <img key={i} src={pic} alt={`Slide ${i}`} className={getClassName(i)} />
        ))}
      </div>
    </div>
  );
}

export default BannerImage;


