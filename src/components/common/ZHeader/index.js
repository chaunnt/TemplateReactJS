import React from 'react';
import ZSearch from 'components/common/ZSearch';
import ZSetting from '../ZSetting';

const ZHeader = () => {
  return (
    <header className="zing__header">
      <ZSearch />
      <ZSetting />
    </header>
  );
};

export default ZHeader;
