import React from 'react';
import {Icon} from '@iconify/react';

import './style.scss';

interface props {
  icon: string;
  text: string;
}

const MenuItem: React.FC<props> = (props: props) => {
  return (
    <a href="#about" className="navbar-menu-item">
      <Icon icon={props.icon} />
      <div className="navbar-menu-item-text">{props.text}</div>
    </a>
  );
};

export default MenuItem;
