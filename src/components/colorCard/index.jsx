import React from 'react';
import './style.css';
import {ButtonArrow} from '../../components';

export default function (params){
  const classNameBG = `colorCard__background colorCard__background_${params.colorcard.modifiers}`;
  return(
    <div className="colorCard__item">
      <img className="colorCard__poster" src={params.colorcard.posterImage} alt={params.colorcard.id}/>
      <div className={classNameBG} ></div>
      <div className="colorCard__description">
        <div className="colorCard__month">{params.colorcard.textMonth}</div>
        <ButtonArrow
          link = {params.colorcard.link}
        />
      </div>
    </div>
  )
}
