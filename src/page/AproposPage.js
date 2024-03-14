
import React, { useEffect, useState } from 'react';
import './AproposPage.css'; // Importe les styles CSS spécifiques à la page À Propos.
import DescriptionAppartement from '../components/DescriptionAppartement/DescriptionAppartement.js'; // Importe le composant pour afficher des descriptions.
import Banner from '../components/Banner/Banner.js'; // Importe le composant bannière pour afficher une image en tête de la page.
import collapses from './collapses.json'; // Importe les données depuis un fichier JSON contenant les informations à afficher.

export default function AproposPage() {
  const [collapse, setCollapse] = useState([]); // Initialise l'état pour stocker les données JSON.

  useEffect(() => {
    setCollapse(collapses); // Charge les données JSON dans l'état au montage du composant.
  }, []);
  
  const imageSrc = "/image/aboutBanner.png"; // Chemin de l'image de la bannière.

  return (
    <div>
      {/* Affiche la bannière sans texte et sans effet sombre, utilisant l'image spécifiée. */}
      <Banner showText={false} showSombre={false} imageSrc={imageSrc} />
      <div className='contante'>
        {/* Itère sur chaque élément du JSON pour afficher une section de description pour chaque. */}
        {collapse.map((item) => (
          <DescriptionAppartement
            key={item.id} // Utilise l'ID de chaque élément comme clé unique.
            title={item.title} // Passe le titre à afficher dans chaque section de description.
            content={item.content} // Passe le contenu de la description.
          />
        ))}
      </div>
    </div>
  );
}


