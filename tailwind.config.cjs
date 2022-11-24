const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('daisyui'), require('flowbite/plugin')],
	darkMode: 'class',
};
