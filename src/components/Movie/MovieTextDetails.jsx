const MovieTextDetails = ({ title, id }) => {
	return (
		<div className={title != 'Title' ? 'mt-8' : 'mt-0'}>
			<h3 className="text-green-400 font-semibold uppercase text-base tracking-widest">{title}</h3>
			<p className="font-regular text-slate-700 text-sm mb-2 dark:text-white" id={id}></p>
		</div>
	);
};

export default MovieTextDetails;
