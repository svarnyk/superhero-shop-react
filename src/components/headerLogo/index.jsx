import React from "react";
import './style.css';
import Logo from '../../images/Marvel_Logo.svg.png';

export default function () {
  return(
    <a className="header-logo" href="/">
      <img className="header-logo__pic" src={Logo} alt="logo"/>
      </a>
  )
}
