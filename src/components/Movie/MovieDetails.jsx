import React from 'react';
import MovieTextDetails from './MovieTextDetails';

const MovieDetails = () => {
	return (
		<>
			<label htmlFor="my-modal-5" className="btn hidden" id="modal-btn">
				open modal
			</label>

			<input type="checkbox" id="my-modal-5" className="modal-toggle" />
			<div className="modal ">
				<div className="modal-box w-[90%] lg:w-[70%] xl:w-[50%] max-w-5xl bg-white/80 backdrop-blur-sm  dark:bg-slate-900/90 dark:backdrop-blur-sm">
					<div className="flex flex-col lg:flex-row">
						<figure className="bg-black lg:w-[50%] mr-4">
							<img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" className="object-cover w-full h-full" id="poster" />
						</figure>
						<div className="lg:w-[50%] lg:mt-0 mt-5 h-[600px] overflow-y-scroll">
							<MovieTextDetails title="Title" id="title" />
							<MovieTextDetails title="Released" id="released" />
							<MovieTextDetails title="Awards" id="awards" />
							<MovieTextDetails title="Actors" id="actors" />
							<MovieTextDetails title="Director" id="director" />
							<MovieTextDetails title="Writer" id="writer" />
							<MovieTextDetails title="Plot" id="plot" />
						</div>
					</div>
					<div className="modal-action lg:absolute lg:top-8 lg:right-4 mt-4 lg:-mt-4">
						<label htmlFor="my-modal-5" className="btn btn-outline btn-error w-full" id="close-btn">
							<p className="lg:block hidden dark:text-white px-2">x</p>
							<p className="lg:hidden block">close</p>
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
