import React from 'react';
import Title from '../../components/Title';
import ResumeItem from '../../components/ResumeItem';

import './style.scss';

const educationData = [
  {
    title: 'Engenharia da Computação',
    start: '2019',
    end: 'Presente',
    description: 'Universidade Federal do Ceará',
    location: 'Sobral, Ceará',
  },
  {
    title: 'Engenharia da Computação',
    start: '2017',
    end: '2018',
    description: 'Universidade Federal do Ceará',
    location: 'Quixadá, Ceará',
  },
  {
    title: 'Técnico em Redes de Computadores',
    start: '2014',
    end: '2016',
    description: 'EEEP Marta Maria Giffoni de Sousa',
    location: 'Acaraú, CE',
  },
  {
    title: 'Ensino Médio',
    start: '2014',
    end: '2016',
    description: 'EEEP Marta Maria Giffoni de Sousa',
    location: 'Acaraú, CE',
  },
];
const jobData = [
  {
    title: 'Bolsista no Dell LEAD',
    start: 'Jul 2021',
    end: 'Presente',
    description:
      'Desenvolvedor Front e Backend atuando em projetos para a Dell na fabrica de software do Dell LEAD.',
    location: 'Dell LEAD, Fortaleza',
  },

  {
    title: 'Bolsista do CNpq',
    start: 'Jul 2019',
    end: 'Mai 2021',
    description:
      'Detecção de Covid-19 em imagens de tomografia computadorizadas de pulmão, em parceria com o HR (Hospital Regional) ',
    location: 'Universidade Federal do Ceará, Campus Sobral',
  },
  {
    title: 'Bolsista de Iniciação Academica',
    start: 'Ago 2018',
    end: 'Mai 2019',
    description:
      'Criação de cenas em 3D utilizando Blender, para o Museu do Eclipse e Planetário de Sobral',
    location: 'Universidade Federal do Ceará, Campus Sobral',
  },
  {
    title: 'Bolsista de Iniciação Academica',
    start: 'Mar 2017',
    end: 'Dez 2017',
    description:
      'Organização de Minicursos relacionado a Desenvolvimento de Sistemas Embarcados e Software Livre, para apoio a permanencia a Universidade',
    location: 'Universidade Federal do Ceará, Campus Quixadá, CE',
  },
  {
    title: 'Estágio - Atena Desing',
    start: 'Jun 2016',
    end: 'Nov 2016',
    description:
      'Desenvolvimento Web (Full Stack) com Java, Primefaces e Banco de Dados MySQL',
    location: 'Acaraú, CE',
  },
];

const ViewArea: React.FC = () => {
  return (
    <div className="resume-div">
      <div className="resume-title-container">
        <Title title="Curriculo" />
        <p>
          Exponho aqui minha formação academica e experiências profissionais.{' '}
        </p>
      </div>

      <div className="resume-container">
        <div>
          <h3 className="resume-title">Educação</h3>
          {educationData.map((item, index) => (
            <ResumeItem
              key={index}
              title={item.title}
              start={item.start}
              end={item.end}
              description={item.description}
              location={item.location}
            />
          ))}
        </div>

        <div>
          <h3 className="resume-title">Experiencia Profissional</h3>
          {jobData.map((item, index) => (
            <ResumeItem
              key={index}
              title={item.title}
              start={item.start}
              end={item.end}
              description={item.description}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewArea;
