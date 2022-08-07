
import React from 'react';

import './style.css';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

export default function(params){
  return (
    <div className="social">
      <div className="social__item">
        <a className="linkSocial" href="https://www.instagram.com/marvel/">
          <FaInstagram
            color={'grey'}
            size={'45px'}
          />
        </a>
      </div>
      <div className="social__item">
        <a className="linkSocial" href="https://twitter.com/Marvel">
          <FaTwitter
          size={'45px'}
          color={'gray'}
          />
        </a>
      </div>
      <div className="social__item">
        <a className="linkSocial" href="https://www.facebook.com/Marvel/">
          <FaFacebook
          size={'45px'}
          color={'gray'}
          />
        </a>
      </div>
    </div>
  )
}
