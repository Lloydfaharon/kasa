import React , {useEffect,useState}from 'react'
import "../AppartmentGrid/AppartmentGrid.css";
import Appartment from "../Appartment/Appartment.js";



function AppartmentGrid() {
  const [appartments, setAppartments] = useState([]);

  useEffect(fetchAppartments, []);

  function fetchAppartments(){
    fetch("logements.json")
      .then ((respons)=> respons.json())
      .then ((respons)=> setAppartments(respons))
      .catch(console.error);

  }
 
  return (
    <div className='grid'>
      {appartments.map ((appartment) =>  (
        <Appartment 
        title={appartment.title} 
        pictures={appartment.pictures}
        cover={appartment.cover} 
        id={appartment.id} 
      />))}
    </div>
  );
}

export default AppartmentGrid