import React from'react';
import './style.css';

export default function (params){
  const className = `buttonSlider buttonSlider_${params.slider.id}`;
  return(
    <div className={className} onClick={params.slider.onclick}></div>
  )
}
