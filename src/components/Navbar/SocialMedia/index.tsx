import React from 'react';

import './style.scss';

import SocialMediaIcon from './SocialMediaIcon';

const SocialMedia: React.FC = () => {
  return (
    <div className="social">
      <SocialMediaIcon
        icon="bx-bxl-github"
        link="https://github.com/Krymancer"
      />
      <SocialMediaIcon
        icon="bx-bxl-twitter"
        link="https://twitter.com/krymancer01"
      />
      <SocialMediaIcon
        icon="bx-bxl-linkedin"
        link="https://linkedin.com/in/junior-nascm"
      />
      <SocialMediaIcon
        icon="bx-bxl-instagram"
        link="https://instagram.com/krymncer"
      />
      <SocialMediaIcon
        icon="bx-bxl-discord"
        link="https://discordapp.com/users/Jr#1269"
      />
    </div>
  );
};

export default SocialMedia;
