import React  from "react";
import './style.css';
import ShopCard from "../shop-card";

export default function ({releases, releasesTitle}){

  return(
    <div className="latestRelease">
      <div className="latestRelease__header">{releasesTitle}</div>
      <div className="latestRelease__stack">
        {releases.map(cont =>
            <ShopCard release = {cont} key={cont.id} />
        )}
      </div>
    </div>
  )
}
