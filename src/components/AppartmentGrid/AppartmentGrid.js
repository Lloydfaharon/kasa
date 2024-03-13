import React , {useEffect,useState}from 'react'
import "../AppartmentGrid/AppartmentGrid.css";
import Appartment from "../Appartment/Appartment.js";
//import DataFichLogement from "logements.json";



function AppartmentGrid() {
  const [appartments, setAppartments] = useState([]); // Déclare un état local pour stocker la liste des appartements

  useEffect(fetchAppartments, []); // Utilise le hook useEffect pour exécuter la fonction fetchAppartments lors du rendu initial

  function fetchAppartments(){
    fetch("logements.json") // Effectue une requête GET pour récupérer les données des logements à partir du fichier JSON
      .then ((respons)=> respons.json()) // Convertit la réponse en format JSON
      .then ((respons)=> setAppartments(respons)) // Met à jour l'état local avec les données des appartements récupérées
      .catch(console.error); // Gère les éventuelles erreurs en les affichant dans la console
  }
 
  return (
    <div className='grid'>
      {appartments.map ((appartment) =>  ( // Parcourt la liste des appartements et crée un composant Appartment pour chaque appartement
        <Appartment 
          key={appartment.id}
          title={appartment.title} 
          pictures={appartment.pictures}
          cover={appartment.cover} 
          id={appartment.id} 
        />
      ))}
    </div>
  );
}

export default AppartmentGrid