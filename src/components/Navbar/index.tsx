import React from 'react';

import './style.scss';

import Menu from './Menu';
import Profile from './Profile';
import SocialMedia from './SocialMedia';

interface props {
  section: string;
  setSection: (section: string) => void;
}

const Navbar: React.FC<props> = ({section, setSection}) => {
  return (
    <div className="navbar">
      <Profile />
      <SocialMedia />
      <Menu section={section} setSection={setSection} />
    </div>
  );
};

export default Navbar;
