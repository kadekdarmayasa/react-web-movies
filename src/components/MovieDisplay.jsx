function MovieDisplay({ poster, title, type, year }) {
	return (
		<div className="group card w-72 xl:w-96 h-80 shadow-sm cursor-pointer hover:shadow-xl transition-all dark:bg-slate-800/50 dark:backdrop-blur-md">
			<figure className="w-full">
				<img src={poster} alt={title} className="group-hover:scale-105 object-cover w-full saturate-150 contrast-75 hover:contrast-100 transition-all" />
			</figure>
			<div className="card-body">
				<h2 className="card-title dark:text-white">{title}</h2>
				<div className="card-actions flex mt-4">
					<div className="badge badge-success">{type}</div>
					<div className="badge badge-outline badge-success">{year}</div>
				</div>
			</div>
		</div>
	);
}
export default MovieDisplay;
