import React from 'react';
import './style.css';
import {ColorCard} from "../../components";

export default function ({calendar}){
  return (
    <div className="calendar">
      {calendar.map(cont =>
        <ColorCard colorcard = {cont} key={cont.id} />
      )}
    </div>
  )
}
