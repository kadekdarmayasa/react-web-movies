import React from 'react';
import MovieDisplay from './MovieDisplay';
import MovieNotFound from './MovieNotFound';
import Mode from './Mode';

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
		fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=36a96d2e&s=${this.state.keyword}&page=${this.state.page}`)
			.then((response) => response.json())
			.then((results) => {
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
				<header>
					<Mode />
					<div className="container mx-auto">
						<h1 className="text-2xl font-semibold text-center pt-16 dark:text-white">WONDERFUL & POPULAR MOVIES</h1>
						<hr className="block w-[270px] h-[2px] overflow-visible relative bg-slate-300 mt-2 mx-auto" />
						<div className="form-control mt-10">
							<div className="input-group flex justify-center">
								<input type="text" placeholder="Search…" className="input input-bordered w-[300px] md:w-[700px] dark:bg-white/[.08] dark:text-white dark:backdrop-blur-md" id="keyword" required />
								<button className="btn btn-square btn-success" onClick={() => this.getKeyword()}>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</header>

				<main>
					{this.state.isMovieFound == false ? (
						MovieNotFound()
					) : (
						<div className="container mx-auto  mt-10 p-10">
							<div className="flex gap-4 gap-y-10 flex-wrap justify-center">
								{this.state.movieData.map((data) => {
									if (data.Poster != 'N/A') {
										return <MovieDisplay key={data.imdbID} poster={data.Poster} title={data.Title} type={data.Type} year={data.Year} />;
									}
								})}
							</div>

							<div className="btn-group mt-20 flex justify-center">
								<button className="btn btn-outline btn-success" onClick={() => this.decrement()}>
									«
								</button>
								<button className="btn btn-success">Page {this.state.page}</button>
								<button className="btn btn-outline btn-success" onClick={() => this.increment()}>
									»
								</button>
							</div>
						</div>
					)}
				</main>
			</>
		);
	};
}

export default Movie;
