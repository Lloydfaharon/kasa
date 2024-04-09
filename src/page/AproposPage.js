
import React, { useEffect, useState } from 'react';
import './AproposPage.css'; 
import DescriptionAppartement from '../components/DescriptionAppartement/DescriptionAppartement.js'; 
import Banner from '../components/Banner/Banner.js'; 
import collapses from './collapses.json'; 

export default function AproposPage() {
  const [collapse, setCollapse] = useState([]); // Initialise l'état pour stocker les données JSON.

  useEffect(() => {
    setCollapse(collapses); // Charge les données JSON dans l'état au montage du composant.
  }, []);
  
  const imageSrc = "/image/aboutBanner.png"; 

  return (
    <div>
      <Banner showText={false} showSombre={false} imageSrc={imageSrc} />
      <div className='contante'>
        {collapse.map((item) => (
          <DescriptionAppartement
            key={item.id} 
            title={item.title} 
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}


