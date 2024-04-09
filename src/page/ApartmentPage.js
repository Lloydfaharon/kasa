
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import './ApartmentPage.css';
import TitreOwner from '../components/TitreOwner/TitreOwner.js';
import DescriptionAppartement from '../components/DescriptionAppartement/DescriptionAppartement.js';
import BannerImage from '../components/BannerImage/BannerImage.js';
import DataFichLogement from "./logements.json"; 

export default function ApartmentPage() {
  const { id } = useParams(); 
  const navigate= useNavigate()
  const [selectedFlat, setSelectedFlat] = useState(null); 

  useEffect(() => {
    // Trouvez l'appartement correspondant dans DataFichLogement en utilisant l'ID
    const flat = DataFichLogement.find(flat => flat.id === id);
    if(!flat){
      navigate('/erroe');
    } else{
      setSelectedFlat(flat); 
    }
    
  }, [id, navigate]); 

  if (!selectedFlat) return <div>... Chargement</div>; 

  return (
    <div>
      <BannerImage pictures={selectedFlat.pictures} />
      <div className='apartment'>
        <div className='apartment_section'>
          <TitreOwner
            title={selectedFlat.title}
            location={selectedFlat.location}
            tags={selectedFlat.tags}
            host={selectedFlat.host}
            rating={selectedFlat.rating}
          />
          <div className='apartment_description'>
            <DescriptionAppartement title="Description" content={selectedFlat.description} />
            <DescriptionAppartement
              title="Équipement"
              content={
              <ul>{selectedFlat.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}</ul>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

