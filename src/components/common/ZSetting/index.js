import React from 'react';
import ZPersonal from 'components/common/Icon/ZPersonal';
import ZExplore from 'components/common/Icon/ZExplore';
import ZChart from 'components/common/Icon/ZChart';
import ZRadio from 'components/common/Icon/ZRadio';
import ZFollow from 'components/common/Icon/ZFollow';

const DEFAULT_MENU_ITEMS = [
  {
    icon: <ZPersonal />,
  },
  {
    icon: <ZExplore />,
  },
  {
    icon: <ZChart />,
  },
  {
    icon: <ZRadio />,
  },
  {
    icon: <ZFollow />,
  },
];

const ZSetting = () => {
  return (
    <div className="zsetting zsetting__wrapper">
      <ul className="zsetting__list menu-normal">
        {DEFAULT_MENU_ITEMS.map((items, index) => (
          <li key={index} className="zsetting__items">
            {items.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZSetting;
