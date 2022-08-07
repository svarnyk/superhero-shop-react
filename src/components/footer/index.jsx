// імпортуємо реакт якщо використовуємо реакт компонент
import React from 'react';

// імпортуємо стилі кнопки
import './style.css';
import {FooterMenuItem, Social, Copyright, FooterLogo} from '../../components'


export default function(){
  return (
    <div className="footer">
      <div className="footer__leftPart">
        <FooterLogo/>
        <Copyright
          textCopy = {'Copyright 2022 Super-Heroes Shop'}
        />
        <Social/>
      </div>
      <div className="footer__rightPart">
        <div className="footer-menu">
          <FooterMenuItem
            modifiers={['bold']}
            text={'Menu'}
          />
          <FooterMenuItem
            text={'Home'}
            link={'/'}
          />
          <FooterMenuItem
            text={'News'}
            link={'/'}
          />
          <FooterMenuItem
            text={'Characters'}
            link={'/'}
          />
        </div>
        <div className="footer-menu">
            <FooterMenuItem
              modifiers={['bold']}
              text={'Company'}
            />
            <FooterMenuItem
              text={'Management'}
              link={'/'}
            />
            <FooterMenuItem
              text={'Our story'}
              link={'/'}
            />
            <FooterMenuItem
              text={'Career'}
              link={'/'}
            />
          </div>
        <div className="footer-menu">
          <FooterMenuItem
            modifiers={['bold']}
            text={'Support'}
          />
          <FooterMenuItem
            text={'Support Center'}
            link={'/'}
          />
          <FooterMenuItem
            text={'Transaction'}
            link={'/'}
          />
          <FooterMenuItem
            text={'Contact us'}
            link={'/'}
          />
        </div>
      </div>
    </div>

)
}
