import React from 'react';
import 'boxicons';
import './assets/css/main.css';
import ReactDOM from 'react-dom/client';
import Movie from './components/Movie';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Movie />
		<Footer />
	</React.StrictMode>,
);
