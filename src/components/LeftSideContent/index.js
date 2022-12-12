import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ZingLogo from 'components/common/ZingLogo';
import LeftSideMenu from 'components/LeftSideMenu';
import PlaylistBtn from 'components/common/PlaylistBtn';
import Toggle from './components/Toggle';

const LeftSideContent = props => {
  const { className = '' } = props || {};
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  let toggleClassName = isOpen ? 'zing__left-side--open' : 'zing__left-side--close';

  return (
    <aside className={`zing__left-side ${toggleClassName} ${className}`}>
      <ZingLogo />
      <LeftSideMenu />
      <Toggle isOpen={isOpen} toggle={toggle} />
      <PlaylistBtn />
    </aside>
  );
};

LeftSideContent.propTypes = {
  className: PropTypes.string,
};

export default LeftSideContent;
