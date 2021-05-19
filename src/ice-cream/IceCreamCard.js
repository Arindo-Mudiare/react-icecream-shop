import React from 'react';
import IceCreamImage from './IceCreamImage';
import FocusLink from '../structure/FocusLink';

const IceCreamCard = ({ children, to, history, iceCreamId }) => {
    const onItemClickHandler = to => {
        history.push(to, { focus: true });
      };

      const onLinkClickHandler = e => {
        e.stopPropagation();
      };

    return 
    <section
    className="card"
    onClick={() => {
      onItemClickHandler(`/menu-items/${id.toString()}`);
    }}
  >
    <div className="card_image">
      <IceCreamImage iceCreamId={iceCreamId} />
    </div>
    <div className="card_content">
      <h3 className="card_title">
        <FocusLink
          to={`/menu-items/${id.toString()}`}
          onClick={onLinkClickHandler}
        >
          {iceCream.name}
        </FocusLink>
      </h3>
      { children }
    </div>
  </section> 
    
}

export default IceCreamCard
