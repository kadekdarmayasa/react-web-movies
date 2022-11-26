import React from 'react';
import 'boxicons';
import './assets/css/main.css';
import ReactDOM from 'react-dom/client';
import Movie from './components/Movie';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Movie />
		<MovieDetails />
		<Footer />
	</React.StrictMode>,
);
