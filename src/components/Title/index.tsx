import React from 'react';

import './style.scss';

interface props {
  title: string;
}

const Title: React.FC<props> = ({title}: props) => {
  return <h2 className="section-title">{title}</h2>;
};

export default Title;
