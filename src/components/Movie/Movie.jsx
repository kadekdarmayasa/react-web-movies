import React from "react";
import MovieDisplay from "./MovieDisplay";
import MovieNotFound from "./MovieNotFound";
import Header from "../Header/Header";
import DataSource from "../../data/DataSource";
import SkeletonEffectLoading from "./SkeletonEffectLoading";
import Button from "../Buttons/Button";
import { v4 as uuid } from "uuid";

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
      maxPage: null,
      keyword: "Avengers",
      isMovieFound: true,
      skeletonLength: 9,
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getKeyword() {
    const keyword = document.getElementById("keyword");
    keyword.value != "" &&
      this.setState({ keyword: keyword.value }, this.getMovie);
  }

  decrement() {
    this.state.page > 1 &&
      this.setState({ page: --this.state.page }, this.getMovie);
  }

  increment() {
    this.state.page < this.state.maxPage &&
      this.setState({ page: ++this.state.page }, this.getMovie);
  }

  getMovie() {
    this.setState({ movies: [] });

    DataSource.getMovie(this.state.keyword, this.state.page).then((results) => {
      if (results.Response == "False") {
        this.setState(() => ({ isMovieFound: false }));
      } else {
        const totalResults = +results.totalResults;
        const totalDataPerPage = 10;
        const page = Math.floor(totalResults / totalDataPerPage);

        if (page > 1) {
          this.setState(() => ({
            movies: results.Search,
            isMovieFound: true,
            maxPage: page - 1,
          }));
        } else {
          this.setState(() => ({
            isMovieFound: false,
          }));
        }
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header movie={this} />
        <main>
          <div className="btn-group mt-10 flex justify-center">
            {this.state.page > 1 && (
              <Button.PrevMovie decrement={this.decrement} />
            )}
            <button className="btn btn-success">Page {this.state.page}</button>
            {this.state.page !== this.state.maxPage - 1 && (
              <Button.NextMovie increment={this.increment} />
            )}
          </div>
          {!this.state.isMovieFound ? (
            MovieNotFound()
          ) : (
            <div className="container mx-auto  mt-10 p-8">
              <div className="flex gap-4 gap-y-10 flex-wrap justify-center min-h-[900px] movie-container">
                {this.state.movies.length == 0
                  ? Array.from({ length: this.state.skeletonLength }).map(
                      () => {
                        return <SkeletonEffectLoading key={uuid()} />;
                      }
                    )
                  : this.state.movies.map((movie) => {
                      {
                        if (movie.Poster != "N/A") {
                          return (
                            <MovieDisplay
                              key={movie.imdbID}
                              id={movie.imdbID}
                              poster={movie.Poster}
                              title={movie.Title}
                              type={movie.Type}
                              year={movie.Year}
                            />
                          );
                        }
                      }
                    })}
              </div>
            </div>
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default Movie;
