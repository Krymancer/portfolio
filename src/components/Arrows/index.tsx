import React from 'react';
import Arrow from './Arrow';

import './style.scss';

interface props {
  handlePage: (direction: number) => void;
}

const Arrows: React.FC<props> = ({handlePage}: props) => {
  return (
    <div className="arrows-container">
      <Arrow direction={-1} handlePage={handlePage} />
      <Arrow direction={1} handlePage={handlePage} />
    </div>
  );
};

export default Arrows;
