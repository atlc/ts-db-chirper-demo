import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import AllChirps from './views/AllChirps';
import CreateChirp from './views/CreateChirp';
import ChirpDetails from './views/ChirpDetails';
import ChirpAdmin from './views/ChirpAdmin';


const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="vh-90 overflow-hidden d-flex justify-content-center align-items-center text-light">
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/chirps'>
						<AllChirps />
					</Route>
					<Route exact path='/chirps/create'>
						<CreateChirp />
					</Route>
					<Route exact path='/chirps/:id'>
						<ChirpDetails />
					</Route>
					<Route exact path='/chirps/:id/admin'>
						<ChirpAdmin />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
