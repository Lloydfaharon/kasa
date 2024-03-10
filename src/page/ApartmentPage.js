import React, { useEffect, useState } from 'react';
import './ApartmentPage.css';
import TitreOwner from '../components/TitreOwner/TitreOwner.js';
import DescriptionAppartement from '../components/DescriptionAppartement/DescriptionAppartement.js';
import BannerImage from '../components/BannerImage/BannerImage.js';
import { useLocation } from 'react-router-dom';

export default function ApartmentPage() {
  const location = useLocation();
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetchAppartments();
  }, );

  function fetchAppartments() {
    fetch("logements.json")
      .then((respons) => respons.json())
      .then((flats) => {
        const selecteFlat = flats.find((flat) => flat.id === location.state.appartmentId);
        setSelectedFlat(selecteFlat);
      })
      .catch(console.error);
  }

  if (selectedFlat === null) return <div>... Chargement</div>;

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
              title="Equipement"
              content={selectedFlat.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
