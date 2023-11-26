import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddBook from '../AddBook';
import Booklist from '../Booklist';

const Main = () => {
    return (
        <BrowserRouter>
         <div>
          <Header />
          <div className='maincontent'>
            <Routes>
            <Route Component={Booklist} path='/' />
            <Route Component={AddBook} path="add" /> 
             </Routes>
          </div>
        </div>
        </BrowserRouter>
       
    );
}

export default Main;
