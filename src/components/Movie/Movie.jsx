import React from 'react';
import MovieDisplay from './MovieDisplay';
import MovieNotFound from './MovieNotFound';
import Header from '../Header/Header';
import DataSource from '../../data/DataSource';

class Movie extends React.Component {
	constructor() {
		super();
		this.state = {
			movieData: [],
			page: 1,
			maxPage: null,
			keyword: 'Avengers',
			isMovieFound: true,
		};
	}

	componentDidMount = () => this.getMovie();

	getKeyword = () => {
		const keyword = document.getElementById('keyword');
		keyword.value != '' && this.setState({ keyword: keyword.value }, this.getMovie);
	};

	decrement = () => this.state.page > 1 && this.setState({ page: --this.state.page }, this.getMovie);

	increment = () => this.state.page < this.state.maxPage && this.setState({ page: ++this.state.page }, this.getMovie);

	getMovie = () => {
		DataSource.getMovie(this.state.keyword, this.state.page).then((results) => {
			if (results.Response == 'False') {
				this.setState(() => ({ isMovieFound: false }));
			} else {
				const totalResults = +results.totalResults;
				const totalDataPerPage = 10;
				const page = Math.floor(totalResults / totalDataPerPage);

				this.setState(() => ({
					movieData: results.Search,
					isMovieFound: true,
					maxPage: page - 1,
				}));
			}
		});
	};

	render = () => {
		return (
			<>
				<Header movie={this} />
				<main>
					{this.state.isMovieFound == false ? (
						MovieNotFound()
					) : (
						<div className="container mx-auto  mt-10 p-8">
							<div className="flex gap-4 gap-y-10 flex-wrap justify-center min-h-[900px]">
								{this.state.movieData.map((data) => {
									if (data.Poster != 'N/A') {
										return <MovieDisplay key={data.imdbID} id={data.imdbID} poster={data.Poster} title={data.Title} type={data.Type} year={data.Year} />;
									}
								})}
							</div>

							<div className="btn-group mt-20 flex justify-center">
								{this.state.page > 1 && (
									<button className="btn btn-outline btn-success" onClick={() => this.decrement()}>
										«
									</button>
								)}
								<button className="btn btn-success">Page {this.state.page}</button>

								{this.state.page !== this.state.maxPage && (
									<button className="btn btn-outline btn-success" onClick={() => this.increment()}>
										»
									</button>
								)}
							</div>
						</div>
					)}
				</main>
			</>
		);
	};
}

export default Movie;
