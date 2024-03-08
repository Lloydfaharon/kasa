import React, { useEffect, useState } from 'react';
import './AproposPage.css';
import DescriptionAppartement from '../components/DescriptionAppartement/DescriptionAppartement.js';
import BannerImage from '../components/BannerImage/BannerImage.js';
import collapses from './collapses.json'; // Importez directement le fichier JSON

export default function AproposPage() {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    setEmployee(collapses); // Utilisez directement le contenu du fichier JSON
  }, []);

  return (
    <div>
      <BannerImage />
      <div className='contante'>
        

        {employees.map ((employees) =>  (
        <DescriptionAppartement
        title={employees.title} 
        content={employees.content} 
        id={employees.id} 
      />))}
      </div>
    </div>
  );
}

