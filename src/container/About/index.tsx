import React from 'react';

import './style.scss';

import Title from '../../components/Title';

const data = [
  {name: 'Idade', value: '21 Anos'},
  {name: 'Email', value: 'junior.nascm@gmail.com'},
  {name: 'Cidade', value: 'Sobral'},
  {name: 'Telefone', value: '+55 (88) 99630-2439'},
  {name: 'Escolaridade', value: 'Graduando Eng. de Computação - UFC'},
  {name: 'Mudança de End.', value: 'Disponivél'},
];

const ViewArea: React.FC = () => {
  const createDetailsList = () => {
    const size = data.length;
    const chunk = size / 2;

    const lists: JSX.Element[] = [];

    for (let i = 0, j = size; i < j; i += chunk) {
      const temp = data.slice(i, i + chunk);

      const itens = temp.map((item, index) => (
        <li key={index}>
          <div>
            <strong>{item.name}</strong>
            <span>{' ' + item.value}</span>
          </div>
        </li>
      ));

      lists.push(
        <div key={lists.length} className="about-details-list-container">
          <ul className="about-details-list">{itens.map(item => item)}</ul>
        </div>
      );
    }

    return lists;
  };

  return (
    <div className="about-div">
      <Title title="Sobre" />
      <p className="about-description">
        Eu sou um programador e um futuro engenheiro da computação. Apaixonado
        por inteligência artificial e ciência. Em busca de aperfeiçoar minhas
        experiências profissionais.{' '}
      </p>

      <div className="about-details-container">
        <h3 className="about-details-title">
          Desenvolvedor Full Stack {'&'} Web Desinger
        </h3>

        <div className="about-details-lists">
          {createDetailsList().map(item => item)}
        </div>
      </div>
    </div>
  );
};

export default ViewArea;
