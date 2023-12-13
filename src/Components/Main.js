import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddBook from '../AddBook';
import Booklist from '../Booklist';
import useLocalStorage from '../Hook/useLocalStorage'

const Main = () => {
  const [books, setBooks] = useLocalStorage ('books', []);
    return (
        <BrowserRouter>
         <div>
          <Header />
          <div className='maincontent'>
            <Routes>
          
            <Route Component={Booklist} path="/" exact={true} />
            <Route
              render={(props) => (
                <AddBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
       
             </Routes>
          </div>
        </div>
        </BrowserRouter>
       
    );
}

export default Main;
