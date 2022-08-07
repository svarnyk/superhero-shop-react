import React from "react";
import UserpicDefault from "../../images/UserPic-default.png";
import './style.css';
import {Button} from "../../components";



export default function () {
  return (
    <div className="userCtrl">
      <div className="userCtrl__signIn">
        <Button
          textButton={'Signin'}
          modifiers={['red']}
          link={'/'}
        />
      </div>
      <div className="userCtrl__userPic_default">
        <img src={UserpicDefault} alt="userpic default"/>
      </div>
      <div className="userCtrl__signUp">
        <Button
          textButton={'SignUp'}
          modifiers={['white']}
          link={'/'}
        />
      </div>
    </div>
  );
}
