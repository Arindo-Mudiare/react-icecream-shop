import React, { useEffect, useState } from 'react';
import { getMenu } from '../data/iceCreamData';
import IceCreamImage from '../ice-cream/IceCreamImage';
import LoaderMessage from '../structure/LoaderMessage';
import Main from '../structure/Main';
import FocusLink from '../structure/FocusLink';
import propTypes from 'prop-types';

const Menu = ({ history }) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getMenu().then(menuData => {
      if (isMounted) {
        setMenu(menuData);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <Main headingText="Rock your taste buds with one of these">
      <LoaderMessage
        loadingMessage="Loading Menu..."
        isLoading={isLoading}
        doneMessage="Loading menu complete!"
      />
      {menu.length > 0 ? (
        <ul className="cards">
          {menu.map(
            ({ id, iceCream, price, description, inStock, quantity }) => (
              <li className="cards_item" key={id.toString()}>
                
              </li>
            )
          )}
        </ul>
      ) : (
        !isLoading && <h1>Your menu is empty Bruv</h1>
      )}
    </Main>
  );
};

Menu.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
};

export default Menu;
