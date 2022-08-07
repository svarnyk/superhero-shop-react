import React from 'react';
import './style.css';
import {HeaderLogo, HeaderUserCtrlConnect, HeaderUserCtrlDef} from "../../components";

export default function(params){
  return (
    <div className="header">
      <div className="header__logo">
        <HeaderLogo/>
      </div>
      <div className="header__buttonStack">
        <a className="header__button" href={'/'}>News</a>
        <a className="header__button" href={'/'}>Series</a>
        <a className="header__button" href={'/'}>Characters</a>
      </div>
      <HeaderUserCtrlDef/>
      {/*<HeaderUserCtrlConnect/>*/}
    </div>


      // {params.authorized ? 'authorized header' : 'unauthorized header'}
      // {/* Використовуємо компонент кнопки, зверніть увагу, що параметри кнопки залежать від параметрів які передані компоненту хідер */}
      // <Button
      //   modifiers={['big']}
      //   link={params.authorized ? '/' : '/about'}
      //   text={ params.authorized ? "unauthorize" : 'authorize' }
      // />

  )
}
