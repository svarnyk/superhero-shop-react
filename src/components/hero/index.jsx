import React from 'react';
import './style.css';
import Wallpaper from '../../images/wallpaper-display-created-from-covers-of-marvel-comics-featuring-marvel-F34AAD.jpg';
import {ButtonSlider, FindForm, Slider} from "../index";

export default function ({releases}){
  return(
    <div className="hero__container">
      <div className="hero__background">
        <div className="hero__backgroundShadow"></div>
        <img className="hero__backgroundImage" src={Wallpaper}/>
      </div>
      <div className="hero__leftSide">
        <div className="hero__heading">All Marvel Comics in one place</div>
        <div className="hero__greeting">Welcome to Super-Heroes Shop specialized in Marvel Comics. You will find in the shelves of our shop all your favorite super heroes: Spider-Man, Iron Man, Avengers, X-men, Fanstastic 4...</div>
        <div className="hero__findForm">
          <FindForm
         placeholder = 'Find comics...'
          />
        </div>
        <div className="hero__quote">“With great power comes great responsibility”</div>
        <div className="hero__authorOfQuote">Benjamin Parker (aka Uncle Ben)</div>
      </div>
      <div className="hero__rightSide">
        <div className="hero__sliderContainer">
          {releases.map(cont =>
            <Slider slider = {cont} key={cont.id}/>
          )}
        </div>
        <div className="hero__sliderButtonsStack">
          {releases.map(cont =>
          <ButtonSlider slider = {cont} key={cont.id}/>
          )}
        </div>
      </div>
    </div>
  )

}
