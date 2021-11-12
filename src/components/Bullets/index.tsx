import React from 'react';
import Bullet from './Bullet';

import './style.scss';

interface props {
  section: string;
  setSection: (section: string) => void;
}

const itens = ['Home', 'Sobre', 'Curriculo', 'Portifolio', 'Contato'];

const Bullets: React.FC<props> = ({section, setSection}: props) => {
  return (
    <div className="bullet-bar">
      {itens.map((item, index) => (
        <Bullet
          title={item}
          key={index}
          active={item === section}
          setSection={setSection}
        />
      ))}
    </div>
  );
};

export default Bullets;
