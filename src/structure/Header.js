import React from 'react';
import iceCreamImg from '../assets/img/ultimate-ice-cream.svg';

const Header = () => {
  return (
    <header className="senta">
      <h1>
        <img src={iceCreamImg} alt="" />
        Ultimate Ice Cream
      </h1>
    </header>
  );
};

export default Header;
