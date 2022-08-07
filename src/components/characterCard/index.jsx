import React from "react";
import './style.css';

export default function (params){
  return(
    <div className="characterCard">
      <img className="characterCard__image"
           src={params.character.posterImage}
           alt={params.character.id}
      />
      <a className="characterCard__name" href={params.character.link}>{params.character.textName}</a>
    </div>
  )
}
