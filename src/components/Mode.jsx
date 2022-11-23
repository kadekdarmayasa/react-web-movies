import React, { useState, useEffect } from 'react';

function Mode() {
	const [isActive, setIsActive] = useState(false);
	const [modeIcon, setModeIcon] = useState('moon');

	const toggleMode = () => {
		if (!isActive) {
			setModeIcon('sun');
			setIsActive(true);
		} else {
			setModeIcon('moon');
			setIsActive(false);
		}
	};

	useEffect(() => {
		isActive ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	});

	return (
		<div className="flex justify-end p-5">
			<button onClick={toggleMode}>
				<box-icon name={modeIcon} type="regular" border="square" size="md" class="cursor-pointer hover:shadow-xl dark:bg-white/50 rounded-md dark:hover:bg-white/[.8]"></box-icon>
			</button>
			<a href="https://www.github.com/kadekdarmayasa" target="_blank">
				<box-icon type="logo" name="github" border="square" size="md" class="ml-2 cursor-pointer hover:shadow-xl dark:bg-white/50 rounded-md dark:hover:bg-white/[.8]"></box-icon>
			</a>
		</div>
	);
}

export default Mode;
