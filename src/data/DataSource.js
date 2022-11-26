class DataSource {
	static getMovies(movieId) {
		return new Promise((resolve, reject) => {
			fetch('http://www.omdbapi.com/?apikey=36a96d2e&i=' + movieId)
				.then((response) => response.json())
				.then((movies) => resolve(movies));
		});
	}
}

export default DataSource;
