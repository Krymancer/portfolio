import React from 'react';
import Title from '../../components/Title';

import './style.scss';

const ViewArea: React.FC = () => {
  return (
    <div className="curriculum-div">
      <Title title="Curriculo" />
      <p>
        Exponho aqui minha formação academica e experiências profissionais.{' '}
      </p>
    </div>
  );
};

export default ViewArea;
