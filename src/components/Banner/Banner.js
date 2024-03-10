import React from 'react'
import "./Banner.css";

export function Banner({showText ,showSombre, imageSrc}) {
  return (
    <div className="banner">
        <img className="banner_img" src={imageSrc} alt="banner" />
        { showSombre && <div className='banner_sombre'></div>}
        {showText && <span className="banner_txt">Chez vous,partout et ailleurs</span>}
    </div>
  )
}

export default Banner;