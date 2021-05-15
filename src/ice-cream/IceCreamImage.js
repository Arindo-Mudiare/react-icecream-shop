import React from 'react';
import propTypes from 'prop-types';

const IceCreamImage = ({ iceCreamId }) =>
  iceCreamId != null && (
    <img
      src={`${
        process.env.PUBLIC_URL
      }/ice-cream-images/ice-cream-${iceCreamId.toString()}.svg`}
      alt=""
    />
  );

IceCreamImage.propTypes = {
  iceCreamId: propTypes.number,
};

export default IceCreamImage;
