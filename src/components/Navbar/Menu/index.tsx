import React from 'react';
import './style.scss';

import MenuItem from './MenuItem';

const itens = [
  {text: 'Home', icon: 'bx-bx-home'},
  {text: 'Sobre', icon: 'bx-bx-user'},
  {text: 'Curriculo', icon: 'bx-bx-file-blank'},
  {text: 'Portifolio', icon: 'bx-bx-book-content'},
  {text: 'Contato', icon: 'bx-bx-envelope'},
];
interface props {
  section: string;
  setSection: (section: string) => void;
}

const Menu: React.FC<props> = ({section, setSection}) => {
  return (
    <div className="navbar-menu">
      {itens.map(item => (
        <MenuItem
          key={item.text}
          text={item.text}
          icon={item.icon}
          setSection={setSection}
          active={item.text === section}
        />
      ))}
    </div>
  );
};

export default Menu;
