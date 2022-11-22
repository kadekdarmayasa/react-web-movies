function Mode() {
	return (
		<div className="flex justify-end p-5">
			<box-icon name="moon" type="regular" border="square" size="md" class="cursor-pointer hover:shadow-xl"></box-icon>
			<a href="https://www.github.com/kadekdarmayasa" target="_blank">
				<box-icon type="logo" name="github" border="square" size="md" class="ml-2 cursor-pointer hover:shadow-xl"></box-icon>
			</a>
		</div>
	);
}

export default Mode;
