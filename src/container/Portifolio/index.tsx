import React from 'react';
import Title from '../../components/Title';

import './style.scss';

const ViewArea: React.FC = () => {
  return (
    <div className="portfolio-div">
      <Title title="Portifolio" />
      <p>
        Exponho aqui alguns de meus projetos, focados em Web, devido a sua
        natureza são mais faceis de expor e ver. Caso tenha interesse em outros
        tipo de trabalhos, pode sempre ver meu{' '}
        <a className="portfolio-link" href="https://github.com/krymancer">
          Github
        </a>{' '}
        ou me mandar um{' '}
        <a className="portfolio-link" href="mailto:junior.nascm@gmail.com">
          e-mail
        </a>
      </p>
    </div>
  );
};

export default ViewArea;
