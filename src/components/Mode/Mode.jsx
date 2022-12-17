import React, { useState, useEffect } from 'react';
import Button from '../Buttons/Button';

const Mode = () => {
	const [isActive, setIsActive] = useState(false);
	const [modeIcon, setModeIcon] = useState('moon');

	const tOnDarkMode = () => {
		setModeIcon('sun');
		setIsActive(true);
		localStorage.setItem('DARK-MODE', true);
	};

	const tOffDarkMode = () => {
		setModeIcon('moon');
		setIsActive(false);
		localStorage.removeItem('DARK-MODE');
	};

	const toggleMode = () => {
		isActive ? tOffDarkMode() : tOnDarkMode();
	};

	useEffect(() => {
		if (localStorage.getItem('DARK-MODE')) tOnDarkMode();
		isActive ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	});

	return (
		<div className="flex justify-end p-5">
			<Button.Mode toggleMode={toggleMode} modeIcon={modeIcon} />
			<Button.Github />
		</div>
	);
};

export default Mode;
