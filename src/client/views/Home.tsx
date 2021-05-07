import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <h1 className='px-2 text-center'>Welcome to Chirper! Feel free to <NavLink exact to='/chirps'>check out some chirps!</NavLink></h1>
    )
}

export default Home;