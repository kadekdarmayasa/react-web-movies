function MovieDisplay({ poster, title, type, year }) {
	return (
		<div className="card w-72 xl:w-96 bg-base-200 shadow-sm cursor-pointer hover:shadow-xl transition-all ">
			<figure className="w-full">
				<img src={poster} alt={title} className="object-cover w-full saturate-150 contrast-75 hover:contrast-100" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<div className="card-actions flex mt-4">
					<div className="badge badge-success">{type}</div>
					<div className="badge badge-outline badge-success">{year}</div>
				</div>
			</div>
		</div>
	);
}
export default MovieDisplay;
