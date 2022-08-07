import React from "react";

import './style.css';
import Logo from '../../images/Marvel_Logo.svg.png';

export default function () {
  return(
    <a className="footer-logo" href="/">
      <img className="footer-logo__pic" src={Logo} alt="logo"/>
      </a>
  )
}
