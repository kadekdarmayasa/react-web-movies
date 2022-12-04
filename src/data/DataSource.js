class DataSource {
	static #baseUrl = 'http://www.omdbapi.com/?apikey=36a96d2e';

	static getMovie = (keyword, page) => {
		return new Promise((resolve, reject) => {
			fetch(`${DataSource.#baseUrl}&s=${keyword}&page=${page}`)
				.then((response) => response.json())
				.then((results) => resolve(results));
		});
	};

	static getMovieDetails = (movieId) => {
		return new Promise((resolve, reject) => {
			fetch(`${DataSource.#baseUrl}&i=${movieId}`)
				.then((response) => response.json())
				.then((movies) => resolve(movies));
		});
	};
}

export default DataSource;
