


import React from 'react' // Importe React depuis la bibliothèque react pour utiliser JSX.
import "./Banner.css"; // Importe les styles CSS spécifiques à ce composant Banner.

// Définition du composant fonctionnel Banner qui accepte des props.
export function Banner({showText ,showSombre, imageSrc}) {
  // Rendu du composant Banner.
  return (
    <div className="banner"> {/* Un div conteneur avec la classe CSS "banner" pour appliquer les styles définis dans Banner.css.*/}
        <img className="banner_img" src={imageSrc} alt="banner" /> 
        {/*Affiche une image avec la classe CSS "banner_img". L'attribut src est défini par la prop imageSrc, et l'attribut alt est statique.*/}
        
        { showSombre && <div className='banner_sombre'></div>}
        {/*Conditionnellement rend une div avec la classe "banner_sombre" si la prop showSombre est true. Cette div sert de surcouche assombrissante.*/}
        
        {showText && <span className="banner_txt">Chez vous, partout et ailleurs</span>}
        {/*Conditionnellement affiche du texte si la prop showText est true. Le texte est statique et affiché dans un élément spa avec la classe "banner_txt".*/}
    </div>
  )
}

export default Banner; // Exporte le composant Banner pour permettre son utilisation dans d'autres parties de l'application.
