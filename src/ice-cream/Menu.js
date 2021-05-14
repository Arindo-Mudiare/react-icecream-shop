import React, { useEffect, useState } from 'react';
import { getMenu } from '../data/iceCreamData';
import Helmet from 'react-helmet';
import IceCreamImage from '../ice-cream/IceCreamImage';
import LoaderMessage from '../structure/LoaderMessage';
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const Menu = ({history}) => {
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

  const onItemClickHandler = to => {
      history.push(to);
  }
  const onLinkClickHandler = e => {
      e.stopPropagation();
  } 

  return (
    <main className="main">
      <Helmet>
        <title>
          Rock your taste buds with one of these | Ultimate Ice Jollof
        </title>
      </Helmet>
      <h1 className="main-heading">Rock your taste buds with one of these</h1>
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
                <section 
                className="card"
                onClick={()=> {
                  onItemClickHandler(`/menu-items/${id.toString()}`)
                }} >
                  <div className="card_image">
                    <IceCreamImage iceCreamId={iceCream.id} />
                  </div>
                  <div className="card_content">
                    <h3 className="card_title"><Link 
                    to={`/menu-items/${id.toString()}`}
                    onClick={onLinkClickHandler}
                    >
                    {iceCream.name}</Link>
                    </h3>
                    <div className="card_text">
                      <p className="price">{`$${price.toFixed(2)}`}</p>
                      <p className={`stock${inStock ? '' : ' out'}`}>
                        {inStock
                          ? `${quantity} in stock`
                          : `Currently out of stock!!`}
                      </p>
                      <p className="description">{description}</p>
                    </div>
                  </div>
                </section>
              </li>
            )
          )}
        </ul>
      ) : (
        !isLoading && <h1>Your menu is empty Bruv</h1>
      )}
    </main>
  );
};

Menu.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  })
}

export default Menu;
