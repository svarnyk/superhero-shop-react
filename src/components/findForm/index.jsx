import React from 'react';
import './style.css';
import {ButtonFind} from "../index";

export default function (params){
  return(
    <div className="findForm__container">
    <input className="findForm__input" type='text' placeholder={params.placeholder}/>
      <div className="findForm__button">
        <ButtonFind
          link = {params.link}
          onClick = {params.onclick}
        />
      </div>
    </div>
  )
}
