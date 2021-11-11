import React from 'react';
import {Icon} from '@iconify/react';

import './style.scss';
interface props {
  icon: string;
  text: string;
  active: boolean;
  setSection: (section: string) => void;
}

const MenuItem: React.FC<props> = ({active, icon, text, setSection}: props) => {
  return (
    <a
      href="#about"
      className="navbar-menu-item"
      onClick={() => {
        setSection(text);
      }}
    >
      <Icon icon={icon} className={active ? 'menu-active' : ''} />
      <div className="navbar-menu-item-text">{text}</div>
    </a>
  );
};

export default MenuItem;
