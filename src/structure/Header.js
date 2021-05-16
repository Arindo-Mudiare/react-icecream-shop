import React from 'react';
import iceCreamImg from '../assets/img/ultimate-ice-cream.svg';
import FocusLink from '../structure/FocusLink';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <h1 className="py-4">
        <img src={iceCreamImg} alt="" />
        Ultimate Ice Cream
      </h1>
      <nav className="navbar navbar-light bg-light col-sm-8 position-relative top-100 start-50 translate-middle mt-4">
        <div className="container">
          <FocusLink
            to="/"
            className="navbar-brand"
            activeClassName="active"
            exact
          >
            Menu
          </FocusLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
