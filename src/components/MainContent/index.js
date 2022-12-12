import React from 'react';
import PropTypes from 'prop-types';
import ZHeader from 'components/common/ZHeader';

const MainContent = props => {
  const { className = '' } = props || {};

  return (
    <div className={`zing__main-content ${className}`}>
      <ZHeader />
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
