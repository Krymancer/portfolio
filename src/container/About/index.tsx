import React from 'react';

import './style.scss';

import Title from '../../components/Title';
import {Icon} from '@iconify/react';

const ViewArea: React.FC = () => {
  return (
    <div className="about-div">
      <Title title="Sobre" />
      <p>
        Eu sou um programador e um futuro engenheiro da computação. Apaixonado
        por inteligência artificial e ciência. Em busca de aperfeiçoar minhas
        experiências profissionais.{' '}
      </p>

      <div className="container">
        <div className="about-avatar-container">
          <img
            className="about-avatar"
            src="https://avatars.githubusercontent.com/krymancer"
          />
        </div>

        <div>
          <h3 className="about-details-title">
            Desenvolvedor Full Stack {'&'} Web Desinger
          </h3>

          <div className="about-details-list-container">
            <ul className="about-details-list">
              <li>
                <Icon icon="bi-chevron-right" />
                <strong>Idade:</strong>
                <span>21 anos</span>
              </li>

              <li>
                <Icon icon="bi-chevron-right" />
                <strong>Email:</strong>
                <span>junior.nascm@gmail.com</span>
              </li>
              <li>
                <Icon icon="bi-chevron-right" />
                <strong>Cidade:</strong>
                <span>Sobral</span>
              </li>
            </ul>
            <ul className="about-details-list">
              <li>
                <Icon icon="bi-chevron-right" />
                <strong>Telefone:</strong>
                <span>+55 (88) 99630-2439</span>
              </li>

              <li>
                <Icon icon="bi-chevron-right" />
                <div>
                  <strong>Escolaridade:</strong>
                  <span> Graduando em Eng. de Computação pela UFC</span>
                </div>
              </li>
              <li>
                <Icon icon="bi-chevron-right" />
                <strong>Mudança de Endereço:</strong>
                <span>Disponivél</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewArea;
