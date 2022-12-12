import React from 'react';
import PropTypes from 'prop-types';

const Toggle = props => {
  const { isOpen, toggle } = props || {};

  return (
    <div className="zing__left-side-toggle-btn">
      <button onClick={toggle} className="btn-normal toggle-btn">
        {isOpen ? 'X' : '>'}
      </button>
    </div>
  );
};

Toggle.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Toggle;
