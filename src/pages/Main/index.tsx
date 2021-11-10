import React from 'react';
import './style.scss';

import Navbar from '../../components/Navbar';
import ViewArea from '../../container/ViewArea';

const Main: React.FC = () => {
  return (
    <div className="main">
      <Navbar />
      <ViewArea section="Home" />
    </div>
  );
};

export default Main;
