import React from 'react';
import './style.scss';

import MenuItem from './MenuItem';

const itens = [
  {text: 'Home', icon: 'bx-bx-home'},
  {text: 'Sobre', icon: 'bx-bx-user'},
  {text: 'Curriculo', icon: 'bx-bx-file-blank'},
  {text: 'Protfolio', icon: 'bx-bx-book-content'},
  {text: 'Contato', icon: 'bx-bx-envelope'},
];

const Menu: React.FC = () => {
  return (
    <div className="navbar-menu">
      {itens.map(item => (
        <MenuItem text={item.text} icon={item.icon} />
      ))}
    </div>
  );
};

export default Menu;
