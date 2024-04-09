





import React from 'react'
import './TitreOwner.css' 

function TitreOwner(props) {
    return (
        
        <div className='apartment_section_right_left'>
          
          <div className='apartment_title'>
            
            <h1>{props.title}</h1>
            
            <h2>{props.location}</h2>
            
            <div className='apartment_subtitle'>
              
              {props.tags.map((tag) =>(
                <div key={tag} className='box'>
                  <p>{tag}</p>
                </div>  
              ))}
            </div> 
          </div>
          
          <div className='apartment_owner'>
            <div className='apartment_owner_section' >
              
              <h3>{props.host.name}</h3>
              
              <div className='apartment_owner_section_badge'>
                
                <img src={props.host.picture} alt="owner"/>
              </div>
            </div>
            
            <div className='apartment_owner_stars'>
              
              {[1, 2, 3, 4, 5].map((num) => (
                
                <span key={num} className={props.rating >= num ? "on" : "off"}>★</span>
              ))}
            </div> 
          </div>
        </div>
    )
}

export default TitreOwner
