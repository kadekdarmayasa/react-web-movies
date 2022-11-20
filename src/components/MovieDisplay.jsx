function MovieDisplay({ key, poster, title, type, year }) {
	return (
		<div key={key} className="card w-96 bg-base-200 shadow-sm cursor-pointer">
			<figure className="w-full">
				<img src={poster} alt={title} className="object-cover w-full" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<div className="card-actions flex mt-4">
					<div className="badge badge-outline">{type}</div>
					<div className="badge badge-outline">{year}</div>
				</div>
			</div>
		</div>
	);
}
export default MovieDisplay;
