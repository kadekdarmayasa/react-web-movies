import React from 'react';
import ReactDOM from 'react-dom/client';
import Movie from './components/Movie';
import Footer from './components/Footer';
import './assets/css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Movie />
		<Footer />
	</React.StrictMode>,
);
