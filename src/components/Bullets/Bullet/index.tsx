import React from 'react';

import './style.scss';

interface props {
  title: string;
  active?: boolean;
  setSection: (section: string) => void;
}

const Bullet: React.FC<props> = ({title, active, setSection}: props) => {
  return (
    <div
      className={'tooltip bullet ' + (active ? ' active' : ' idle')}
      onClick={() => {
        setSection(title);
      }}
    >
      <div className="tooltiptext">{title}</div>
    </div>
  );
};

export default Bullet;
