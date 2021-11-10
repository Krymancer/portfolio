import React from 'react';

import './style.scss';

import {Icon} from '@iconify/react';

interface props {
  icon: string;
  link: string;
}

const SocialMediaIcon: React.FC<props> = (props: props) => {
  return (
    <div className="social-item">
      <a target="_blank" rel="noopener noreferrer" href={props.link}>
        <Icon icon={props.icon}></Icon>
      </a>
    </div>
  );
};

export default SocialMediaIcon;
