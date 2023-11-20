import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <h1>Book Management</h1>
           <div className='headerlinks'>
            <NavLink to="/" className="link" activeClassName="active" exact>
                Book list
            </NavLink>
            <NavLink to="/add" className="link" activeClassName="active">
                Add Book
            </NavLink>

           </div>
        </div>
    );
}

export default Header;
