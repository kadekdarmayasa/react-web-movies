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
			<div className="modal">
				<div className="modal-box w-[50%] max-w-5xl">
					<div className="flex">
						<figure className="bg-black w-[50%] mr-4">
							<img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" className="object-cover w-full" />
						</figure>
						<div className="w-[50%]">
							<div>
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Title</h3>
								<p className="font-regular text-slate-700 text-sm mb-2" id="title"></p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Released</h3>
								<p className="font-regular text-slate-700 text-sm mb-2">04 May 2012</p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Awards</h3>
								<p className="font-regular text-slate-700 text-sm mb-2">Nominated for 1 Oscar. 38 wins & 80 nominations total</p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Actors</h3>
								<p className="font-regular text-slate-700 text-sm mb-2">Robert Downey Jr., Chris Evans, Scarlett Johansson</p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Director</h3>
								<p className="font-regular text-slate-700 text-sm mb-2">Joss Whedon</p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Writer</h3>
								<p className="font-regular text-slate-700 text-sm mb-2">Joss Whedon, Zak Penn</p>
							</div>

							<div className="mt-8">
								<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">Plot</h3>
								<p className="font-regular text-slate-700 leading-6 text-sm mb-2">
									Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.
								</p>
							</div>
						</div>
					</div>
					<div className="modal-action -mt-10 ">
						<label htmlFor="my-modal-5" className=" btn btn-outline btn-error">
							Close
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
