import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import nécessaire pour utiliser useParams
import './ApartmentPage.css';
import TitreOwner from '../components/TitreOwner/TitreOwner.js';
import DescriptionAppartement from '../components/DescriptionAppartement/DescriptionAppartement.js';
import BannerImage from '../components/BannerImage/BannerImage.js';
import DataFichLogement from "./logements.json"; // Assurez-vous que le chemin est correct

export default function ApartmentPage() {
  const { id } = useParams(); // Utilisez useParams pour récupérer l'ID de l'appartement
  const navigate= useNavigate()
  const [selectedFlat, setSelectedFlat] = useState(null); // État pour stocker l'appartement sélectionné

  useEffect(() => {
    // Trouvez l'appartement correspondant dans DataFichLogement en utilisant l'ID
    const flat = DataFichLogement.find(flat => flat.id === id);
    if(!flat){
      navigate('/erroe');
    } else{
      setSelectedFlat(flat); // Mettez à jour l'état avec l'appartement trouvé
    }
    
  }, [id, navigate]); // Rerun quand l'ID change

  if (!selectedFlat) return <div>... Chargement</div>; // Affichez ceci si aucun appartement n'est trouvé

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
              content={<ul>{selectedFlat.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}</ul>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
