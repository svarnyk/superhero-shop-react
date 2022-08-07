import React from "react";
import './style.css';
import Button from '../button'
import Rating from "../rating";

export default function (params) {

  return(
    <div className="shop-card">
      <div className="shop-card-poster">
        <div className="poster-image">
          <img className="poster-image__pic" src={params.release.posterImage} alt={params.release.id}/>
        </div>
        <Rating
        textRating = {params.release.textRating}
        />
      </div>
      <div className="shop-card-description">
        <div className="shop-card-name">
          <div className="shop-card-name__comicsName">{params.release.textComicsName || 'Comics Name'}</div>
          <div className="shop-card-name__collectionName">{params.release.textCollectionName || 'Collection Name'}</div>
        </div>
        <div className="shop-card-price">
          {params.release.textPrice || '$0.00'}
        </div>
        <div className="shop-card-properties">
          <div className="shop-card-properties__description">
            {params.release.textDescr || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </div>
          <div className="shop-card-properties__button">
          <Button
            modifiers={['red']}
            link={params.release.link}
            textButton={params.release.textButton}
          />
          </div>
        </div>
      </div>
    </div>
  )
}
