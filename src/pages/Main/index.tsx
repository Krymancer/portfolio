import React, {useState} from 'react';
import './style.scss';

import Navbar from '../../components/Navbar';
import ViewArea from '../../container/ViewArea';

const Main: React.FC = () => {
  const [page, setPage] = useState<string>('Home');
  return (
    <div className="main">
      <Navbar section={page} setSection={setPage} />
      <ViewArea section={page} />
    </div>
  );
};

export default Main;
