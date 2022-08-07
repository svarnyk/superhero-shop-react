import React from 'react';
import './style.css';
import {ImArrowUpRight2} from 'react-icons/im';
export default function (params){
  return(
    <a className="buttonArrow" href={params.link || '/'} onClick={params.onclick}>
    <ImArrowUpRight2
    size={'17px'}
    color={'black'}
    />
    </a>
  )
}
