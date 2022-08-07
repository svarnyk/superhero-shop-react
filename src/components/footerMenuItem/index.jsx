import React from 'react';

// цей компонент використовується для навігації в реакті,
// якщо замість нього використати звичайний <a> - то сторінка перезавантажиться
import { Link } from "react-router-dom";
import './style.css';

export default function(params){
  // якщо масив модифікаторів не вказано, то використовуємо пустий масив
  let modifiers = params.modifiers || [];

  // геннеруємо назви класів модифікаторів
  const className = `footer-menu__item ${modifiers.map(modifier => `footer-menu__item_${modifier}`)}`;

  return (
    <a className={className} href={params.link}>
      {params.text}
    </a>
  )
}
