import React from 'react';
import ZPersonal from 'components/common/Icon/ZPersonal';
import ZExplore from 'components/common/Icon/ZExplore';
import ZChart from 'components/common/Icon/ZChart';
import ZRadio from 'components/common/Icon/ZRadio';
import ZFollow from 'components/common/Icon/ZFollow';

const DEFAULT_MENU_ITEMS = [
  {
    icon: <ZPersonal />,
    name: 'Cá nhân',
    className: 'lmenu__items-active',
  },
  {
    icon: <ZExplore />,
    name: 'Cá nhân',
  },
  {
    icon: <ZChart />,
    name: '#zingchart',
  },
  {
    icon: <ZRadio />,
    name: 'Radio',
  },
  {
    icon: <ZFollow />,
    name: 'Theo Dõi',
  },
];

const LeftSideMenu = () => {
  return (
    <nav className="lmenu lmenu__wrapper">
      <ul className="lmenu__list menu-normal">
        {DEFAULT_MENU_ITEMS.map((items, index) => (
          <li key={index} className={`lmenu__items ${items.className || ''}`}>
            <span className="mr-10">{items.icon}</span>
            <span>{items.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftSideMenu;
