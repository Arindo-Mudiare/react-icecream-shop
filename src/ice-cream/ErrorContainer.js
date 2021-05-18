import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const ErrorContainer = ({ children, errorText, hasSubmitted }) => (
  <div className="{errorText && hasSubmitted ? 'error' : null }">
    {children}
    <div className="error-wrapper">
      {errorText && hasSubmitted && <span>{errorText}</span>}
    </div>
  </div>
);

ErrorContainer.propTypes = {
  children: PropTypes.node.isRequired,
  errorText: PropTypes.string,
  hasSubmitted: PropTypes.bool.isRequired,
};
export default ErrorContainer;
