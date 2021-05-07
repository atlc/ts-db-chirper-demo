import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <h1>Welcome to Chirper! Feel free to <NavLink exact to='/chirps'>check out some chirps!</NavLink></h1>
    )
}

export default Home;