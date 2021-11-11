import React from 'react';
import Title from '../../components/Title';
import Form from '../../components/Form';

import './style.scss';

const ViewArea: React.FC = () => {
  return (
    <div className="contact-div">
      <Title title="Contato" />

      <Form />
    </div>
  );
};

export default ViewArea;
