import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <h1>Book Management</h1>
           <div className='links'>
            <NavLink>
                Book list
            </NavLink>
            <NavLink>
                Add Book
            </NavLink>

           </div>
        </div>
    );
}

export default Header;
