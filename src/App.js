import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css';
import 'flexboxgrid';
import './scss/style.scss';
import Error from './pages/error';
import SBox from './pages/searchbox';

window.__USE_DEVTOOLS__ = true;

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={SBox} />
				<Route exact path="/items" component={Error} />
				<Route exact path="/items/:id" component={Error} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
