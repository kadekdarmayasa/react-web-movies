import React from 'react';
import '../assets/css/main.css';
import MovieDisplay from './MovieDisplay';

class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieData: [],
		};
	}

	componentDidMount() {
		this.getMovie();
	}

	getMovie() {
		fetch('http://www.omdbapi.com/?i=tt3896198&apikey=36a96d2e&s=Avengers')
			.then((response) => {
				return response.json();
			})
			.then((results) => {
				this.setState({
					movieData: results.Search,
				});
			});
	}

	render() {
		return (
			<div className="container mx-auto flex gap-4 gap-y-10 flex-wrap justify-center mt-20">
				{this.state.movieData.map((data) => {
					if (data.Poster != 'N/A') {
						return <MovieDisplay key={data.imdbID} poster={data.Poster} title={data.Title} type={data.Type} year={data.Year} />;
					}
				})}
			</div>
		);
	}
}

export default Movie;
