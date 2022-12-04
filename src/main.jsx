import 'boxicons';
import './assets/css/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer/Footer';
import Movie from './components/Movie/Movie';
import MovieDetails from './components/Movie/MovieDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Movie />
		<MovieDetails />
		<Footer />
	</React.StrictMode>,
);
