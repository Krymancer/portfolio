import React, {useState} from 'react';
import './style.scss';

import Bullets from '../../components/Bullets';
import Container from '../../container/Container';
import Arrows from '../../components/Arrows';

const pages = ['Home', 'Sobre', 'Curriculo', 'Portifolio', 'Contato'];

const Main: React.FC = () => {
  const [page, setPage] = useState<string>('Home');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleSectionChange = (direction: number) => {
    let nextPage = currentPage + direction;

    if (nextPage < 0) {
      nextPage = 0;
    }

    if (nextPage > pages.length - 1) {
      nextPage = pages.length - 1;
    }

    setCurrentPage(nextPage);
    setPage(pages[nextPage]);
  };

  return (
    <div className="main">
      {/* <Navbar section={page} setSection={setPage} /> */}
      <Arrows handlePage={handleSectionChange} />
      <Container section={page} />
      <Bullets section={page} setSection={setPage} />
    </div>
  );
};

export default Main;
