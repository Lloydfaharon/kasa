import React, { useEffect, useState } from 'react';
import './AproposPage.css';
import DescriptionAppartement from '../components/DescriptionAppartement/DescriptionAppartement.js';
import Banner from '../components/Banner/Banner.js';
import collapses from './collapses.json'; // le fichier JSON

export default function AproposPage() {
  const [collapse, setEmployee] = useState([]);

  useEffect(() => {
    setEmployee(collapses); // contenu du fichier JSON
  }, []);
  
  const imageSrc = "/image/aboutBanner.png";

  return (
    <div>
      <Banner showText={false} showSombre={false} imageSrc={imageSrc} />
      <div className='contante'>
        

        {collapse.map ((collapse) =>  (
        <DescriptionAppartement
        title={collapse.title} 
        content={collapse.content} 
        id={collapse.id} 
      />))}
      </div>
    </div>
  );
}

