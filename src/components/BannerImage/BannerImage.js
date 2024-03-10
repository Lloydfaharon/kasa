import React, { useState } from 'react';
import './BannerImage.css';

function BannerImage(props) {
  const picture = props.pictures;
  const [currentPictures, setCurrentPictures] = useState(0);

  const getClassName = (i) => {
    if (i === currentPictures) return "visible";
  };

  const goToNextPicture = () => {
    setCurrentPictures((prevIndex) => (prevIndex === picture.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevPicture = () => {
    setCurrentPictures((prevIndex) => (prevIndex === 0 ? picture.length - 1 : prevIndex - 1));
  };


  return (
    <div className='banner_image'>
      <div className='arrow'>
        <img className='arrow_left' src='/image/arrow_left.png' alt='fleche' onClick={goToPrevPicture} />
        <img className='arrow_right' src='/image/arrow_right.png' alt='fleche' onClick={goToNextPicture} />
      </div>
      <div className='counter_container'>
        <span className='image_counter'>{currentPictures + 1}/{picture.length}</span>
      </div>
      
      <div className='banner_image_container'>
        
        {picture.map((pic, i) => (
          <img key={pic} src={pic} alt='' className={getClassName(i)} />
        ))}
      </div>
      
    </div>
  );
}

export default BannerImage;