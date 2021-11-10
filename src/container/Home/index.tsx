import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';

import './style.scss';

const ViewArea: React.FC = () => {
  const el = useRef<HTMLSpanElement>(document.createElement('span'));

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Desenvolvedor',
        'Engenheiro',
        'Pesquisador',
        'Artista',
        'Designer',
      ],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
      backDelay: 800,
      backSpeed: 100,
      shuffle: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <div className="home-name">Júnior Nascimento</div>
      <div className="home-label">
        <span className="home-label-text" ref={el}></span>
      </div>
    </div>
  );
};

export default ViewArea;
