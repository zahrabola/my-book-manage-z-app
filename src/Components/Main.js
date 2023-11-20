import React from 'react';
import { BrowserRouter, /*Switch, Route, Redirect */ } from 'react-router-dom';
import Header from './Header';

const Main = () => {
    return (
        <BrowserRouter>
         <div>
          <Header />
        </div>
        </BrowserRouter>
       
    );
}

export default Main;
