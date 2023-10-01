import axios from "axios";

class DataSource {
  static _baseUrl = `http://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_OMDB_API_KEY
  }`;

  static _cancel;

  static getMovie = (keyword, page) => {
    return new Promise((resolve) => {
      axios({
        method: "GET",
        url: `${this._baseUrl}&s=${keyword}&page=${page}`,
        cancelToken: new axios.CancelToken((c) => (this._cancel = c)),
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
        });
    });
  };

  static getMovieDetails = (movieId) => {
    return new Promise((resolve) => {
      axios({
        method: "GET",
        url: `${this._baseUrl}&i=${movieId}`,
      }).then((response) => resolve(response.data));
    });
  };
}

export default DataSource;
