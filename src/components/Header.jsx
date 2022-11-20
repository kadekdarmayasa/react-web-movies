function Header() {
	return (
		<header className="container mx-auto">
			<h1 className="text-2xl font-semibold text-center mt-20">WONDERFUL & POPULAR MOVIES</h1>
			<hr className="block w-[270px] h-[2px] overflow-visible relative bg-slate-300 mt-2 mx-auto" />
			<div className="form-control mt-5">
				<div className="input-group flex justify-center">
					<input type="text" placeholder="Search…" className="input input-bordered w-[300px] md:w-[700px]" />
					<button className="btn btn-square btn-success">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
