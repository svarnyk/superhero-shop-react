import React from 'react';
import './style.css';
import {Button} from "../index";


export default function (params){
  const classItem =`slider__item slider__item_pos${params.slider.id}`;
  const classPoster =`slider__poster slider__poster_pos${params.slider.id}`;
  const classDescr =`slider__description slider__description_pos${params.slider.id}`;
  return(
      <div className={classItem}>
        <div className={classPoster}>
          <img src={params.slider.posterImage} alt={params.slider.id} className="slider__image"/>
        </div>
        <div className={classDescr}>
          <div className="slider__descriptionHeading">{params.slider.textComicsName}</div>
          <div className="slider__descriptionText">{params.slider.textDescr}</div>
          <div className="slider__descriptionButton">
            <Button
              modifiers={['red']}
              textButton={params.slider.textButton}
              link={params.slider.link}
            />
          </div>
        </div>
      </div>
  )
}
