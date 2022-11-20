import React from 'react';
import '../assets/css/main.css';
import MovieDisplay from './MovieDisplay';

class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieData: [],
			page: 1,
		};
	}

	componentDidMount() {
		this.getMovie();
	}

	getMovie() {
		fetch('http://www.omdbapi.com/?i=tt3896198&apikey=36a96d2e&s=Avengers&page=' + this.state.page)
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
			<div className="container mx-auto  mt-10 p-10">
				<div className="flex gap-4 gap-y-10 flex-wrap justify-center">
					{this.state.movieData.map((data) => {
						if (data.Poster != 'N/A') {
							return <MovieDisplay key={data.imdbID} poster={data.Poster} title={data.Title} type={data.Type} year={data.Year} />;
						}
					})}
				</div>

				<div className="btn-group mt-20 flex justify-center">
					<button className="btn btn-outline btn-success">«</button>
					<button className="btn btn-success">Page {this.state.page}</button>
					<button className="btn btn-outline btn-success">»</button>
				</div>
			</div>
		);
	}
}

export default Movie;
