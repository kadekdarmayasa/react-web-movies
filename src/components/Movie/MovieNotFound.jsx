import NotFoundImage from '../../assets/img/404-error.png';

const MovieNotFound = () => {
	return (
		<div className="container mx-auto text-center mt-32 mb-20">
			<img src={NotFoundImage} className="mx-auto w-[240px] md:w-[400px]" />
			<h1 className="text-xl xl:text-3xl font-semibold text-slate-400 mt-10">Movie Not Found!</h1>
		</div>
	);
};

export default MovieNotFound;
