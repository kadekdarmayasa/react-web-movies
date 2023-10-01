import Mode from "../Mode/Mode";
import "./Header.css";

const Header = ({ movie }) => {
  return (
    <header>
      <Mode />
      <div className="container mx-auto px-8">
        <h1 className="font-bold text-center pt-16 dark:text-white header-title">
          WONDERFUL & POPULAR MOVIES
        </h1>
        <hr className="block w-[270px] h-[2px] overflow-visible relative bg-slate-300 mt-2 mx-auto" />
        <div className="form-control mt-10">
          <div className="input-group flex justify-center">
            <input
              type="text"
              placeholder="Search Movie..."
              onChange={() => movie.getKeyword()}
              className="input input-bordered w-[300px] md:w-[700px] dark:bg-white/[.08] dark:text-white dark:backdrop-blur-md sm:w-auto w-80%"
              id="keyword"
              required
            />
            <button
              className="btn btn-square btn-success"
              onClick={() => movie.getKeyword()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
