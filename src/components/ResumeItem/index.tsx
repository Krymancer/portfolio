import React from 'react';

import './style.scss';

interface props {
  title: string;
  start: string;
  end: string;
  description: string;
  location: string;
}

const ResumeItem: React.FC<props> = ({
  title,
  start,
  end,
  description,
  location,
}: props) => {
  return (
    <div className="resume-item">
      <h4>{title}</h4>
      <h5>{`${start} - ${end}`}</h5>
      <p>
        <em>{description}</em>
      </p>
      <p>{location}</p>
    </div>
  );
};

export default ResumeItem;
