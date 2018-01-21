import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import '../css/App.css';
import MoviesList from './MoviesList';

const Test = ({ match }) => <h1>{match.params.pageID}</h1>;

const App = () => (
	<Router>
		<div className="App">
			<header className="App-header">
				<Link to="/">
					<img src={logo} className="App-logo" alt="logo" />
				</Link>
			</header>
			<Switch>
				<Route exact path="/" component={MoviesList} />
				<Route path="/:pageID" component={Test} />
			</Switch>
		</div>
	</Router>
);

export default App;
