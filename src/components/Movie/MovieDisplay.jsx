import React, { useState, useEffect } from 'react';
import DataSource from '../../data/DataSource';

function MovieDisplay({ id, poster, title, type, year }) {
	const [isShowModal, setIsShowModal] = useState(false);

	useEffect(() => {
		if (isShowModal) {
			DataSource.getMovieDetails(id).then((result) => {
				document.getElementById('title').innerHTML = result.Title;
				document.getElementById('poster').setAttribute('src', result.Poster);
				document.getElementById('released').innerHTML = result.Released;
				document.getElementById('awards').innerHTML = result.Awards;
				document.getElementById('actors').innerHTML = result.Actors;
				document.getElementById('director').innerHTML = result.Director;
				document.getElementById('writer').innerHTML = result.Writer;
				document.getElementById('plot').innerHTML = result.Plot;
				document.getElementById('modal-btn').click();
			});

			document.getElementById('close-btn').addEventListener('click', () => {
				setIsShowModal(false);
			});
		}
	});

	return (
		<div htmlFor="my-modal" className="group card w-[96%] sm:w-[80%] md:w-72 xl:w-96 h-80 shadow-sm cursor-pointer hover:shadow-xl transition-all dark:bg-slate-800/50 dark:backdrop-blur-md" onClick={() => setIsShowModal(true)}>
			<figure className="w-full">
				<img src={poster} alt={title} className="group-hover:scale-105 object-cover w-full saturate-150 contrast-75 hover:contrast-100 transition-all" />
			</figure>
			<div className="card-body">
				<h2 className="card-title dark:text-white group-hover:text-green-500">{title}</h2>
				<div className="card-actions flex mt-4">
					<div className="badge badge-success">{type}</div>
					<div className="badge badge-outline badge-success">{year}</div>
				</div>
			</div>
		</div>
	);
}
export default MovieDisplay;
