import React from 'react';
import './style.css';
import {FaStar} from "react-icons/fa";

export default function (params){
  return(
    <div className="rating">
      <FaStar
        color={'#FFD705'}
      />
      <div className="rating__text">
        {params.textRating || '0.0'}
      </div>
    </div>
  )
}
