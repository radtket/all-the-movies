import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {
	state = {
		movies: [],
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=10024072d88dc6c8585cd6bc72738757&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
			);
			const movies = await res.json();
			this.setState({
				movies: movies.results,
			});
		} catch (e) {
			console.log(e);
		}
	}
	render() {
		return <div>{this.state.movies.map(item => <Movie key={item.id} movie={item} />)}</div>;
	}
}

export default MoviesList;
