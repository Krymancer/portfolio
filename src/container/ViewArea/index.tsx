import React from 'react';

import './style.scss';

import About from '../About';
import Contact from '../Contact';
import Curriculum from '../Curriculum';
import Protifolio from '../Portifolio';
import Home from '../Home';

interface props {
  section: string;
}

function getSection(section: string) {
  switch (section) {
    case 'About': {
      return <About />;
    }
    case 'Curriculum': {
      return <Curriculum />;
    }
    case 'Home': {
      return <Home />;
    }
    case 'Protifolio': {
      return <Protifolio />;
    }
    case 'Contact': {
      return <Contact />;
    }
    default: {
      return null;
    }
  }
}

const ViewArea: React.FC<props> = ({section}) => {
  return <div className="view">{getSection(section)}</div>;
};

export default ViewArea;
