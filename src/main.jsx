import React from 'react';
import ReactDOM from 'react-dom/client';
import Movie from './components/Movie';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<main>
			<Movie />
		</main>
		<Footer />
	</React.StrictMode>,
);
