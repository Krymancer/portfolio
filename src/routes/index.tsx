import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from '../pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default Router;
