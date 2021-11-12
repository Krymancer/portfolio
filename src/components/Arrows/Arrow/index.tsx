import {Icon} from '@iconify/react';
import React from 'react';

import './style.scss';

interface props {
  direction: number;
  handlePage: (direction: number) => void;
}

const Bullets: React.FC<props> = ({direction, handlePage}: props) => {
  return (
    <div className="arrow-container" onClick={() => handlePage(direction)}>
      <Icon
        icon={
          direction > 0 ? 'akar-icons:chevron-right' : 'akar-icons:chevron-left'
        }
      />
    </div>
  );
};

export default Bullets;
