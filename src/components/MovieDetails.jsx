import React from 'react';

const MovieDetails = () => {
	return (
		<>
			{/* The button to open modal */}
			<label htmlFor="my-modal-5" className="btn hidden" id="modal-btn">
				open modal
			</label>

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my-modal-5" className="modal-toggle" />
			<div className="modal ">
				<div className="modal-box w-[90%] lg:w-[70%] xl:w-[50%] max-w-5xl bg-white/80 backdrop-blur-sm  dark:bg-slate-900/90 dark:backdrop-blur-sm">
					<div className="flex flex-col lg:flex-row">
						<figure className="bg-black lg:w-[50%] mr-4">
							<img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" className="object-cover w-full h-full" id="poster" />
						</figure>
						<div className="lg:w-[50%] lg:mt-0 mt-5 h-[600px] overflow-y-scroll">
							<div>
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Title</h3>
								<p className="font-regular text-slate-700 text-sm mb-2 dark:text-white" id="title"></p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Released</h3>
								<p className="font-regular text-slate-700 text-sm mb-2 dark:text-white" id="released"></p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Awards</h3>
								<p className="font-regular text-slate-700 text-sm mb-2 dark:text-white" id="awards"></p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Actors</h3>
								<p className="font-regular text-slate-700 text-sm mb-2 dark:text-white" id="actors"></p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Director</h3>
								<p className="font-regular text-slate-700 text-sm mb-2 dark:text-white" id="director"></p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Writer</h3>
								<p className="font-regular text-slate-700 text-sm mb-2 dark:text-white" id="writer"></p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Plot</h3>
								<p className="font-regular text-slate-700 leading-6 text-sm mb-2 dark:text-white" id="plot"></p>
							</div>
						</div>
					</div>
					<div className="modal-action lg:absolute lg:top-8 lg:right-4 -mt-4 ">
						<label htmlFor="my-modal-5" className="btn btn-outline btn-error w-full" id="close-btn">
							<p class="lg:block hidden dark:text-white px-2">x</p>
							<p className="lg:hidden block">close</p>
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
