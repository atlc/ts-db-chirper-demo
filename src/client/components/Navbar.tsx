import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="d-flex justify-content-center">
            <NavLink className="btn mx-2 btn-outline-primary" activeClassName="btn-primary text-white" exact to='/'>Home</NavLink>
            <NavLink className="btn mx-2 btn-outline-primary" activeClassName="btn-primary text-white" exact to='/chirps'>All Chirps</NavLink>
            <NavLink className="btn mx-2 btn-outline-primary" activeClassName="btn-primary text-white" exact to='/chirps/create'>Create a Chirp!</NavLink>
        </nav>
    );
};

export default Navbar;
