import React from 'react';
import './style.css';
import {IoMdSearch} from 'react-icons/io';
export default function (params){
  return(
    <a className="buttonFind" href={params.link} onClick={params.onclick}>
    <IoMdSearch
    size={'30px'}
    color={'white'}
    />
    </a>
  )
}
