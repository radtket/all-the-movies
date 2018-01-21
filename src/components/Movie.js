import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = props => (
	<div>
		<Link to={`/${props.movie.id}`}>
			<img src={`${POSTER_PATH}${props.movie.poster_path}`} alt="" />
		</Link>
		<h3>{props.movie.title}</h3>
	</div>
);

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}).isRequired,
};

export default Movie;
