import React from 'react'
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
        <img className="banner_img" src="./image/bannersrc.png" alt="banner" />
        <div className='banner_sombre'></div>
        <span className="banner_txt">Chez vous,partout et ailleurs</span>
    </div>
  )
}

export default Banner