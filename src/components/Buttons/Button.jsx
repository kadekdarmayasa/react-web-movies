const Button = {
	PrevMovie: ({ decrement }) => (
		<button className="btn btn-outline btn-success" onClick={decrement}>
			«
		</button>
	),
	NextMovie: ({ increment }) => (
		<button className="btn btn-outline btn-success" onClick={increment}>
			»
		</button>
	),
	Mode: ({ toggleMode, modeIcon }) => (
		<button onClick={toggleMode}>
			<box-icon name={modeIcon} type="regular" border="square" size="md" class="cursor-pointer hover:shadow-xl dark:bg-white/50 rounded-md dark:hover:bg-white/[.8]"></box-icon>
		</button>
	),
	Github: () => (
		<a href="https://www.github.com/kadekdarmayasa" target="_blank">
			<box-icon type="logo" name="github" border="square" size="md" class="ml-2 cursor-pointer hover:shadow-xl dark:bg-white/50 rounded-md dark:hover:bg-white/[.8]"></box-icon>
		</a>
	),
};

export default Button;
