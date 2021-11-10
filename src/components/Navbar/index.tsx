import React from 'react';

import './style.scss';

import Menu from './Menu';
import Profile from './Profile';
import SocialMedia from './SocialMedia';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Profile />
      <SocialMedia />
      <Menu />
    </div>
  );
};

export default Navbar;
