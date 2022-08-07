import React from "react";
import UserpicConnect from "../../images/Bean.jpg";
import './style.css';
import {FaShoppingCart} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';

export default function () {
  return (
      <div className="userCtrl__connect">
        <div className="userCtrl__cart">
          <FaShoppingCart
          color={'white'}
          size={'24px'}
          />
          <div className="userCtrl__quantityOfGoods">2</div>
        </div>
        <div className="userCtrl__userPic_connect">
          <img className="userPic" src={UserpicConnect} alt="userpic"/>
        </div>
        <div className="userCtrl__chevron">
          <FaChevronDown
          color={'white'}
          />
        </div>
      </div>
  );
}
