import React from "react";
import './style.css';
import {CharacterCard} from '../../components';

export default function ({characters, charactersTitle}){
  return(
    <div className="characters">
      <div className="characters__header">{charactersTitle}</div>
      <div className="characters__stack">
        {characters.map(cont =>
        <CharacterCard character={cont} key={cont.id}/>)}
      </div>
    </div>
  )
}
