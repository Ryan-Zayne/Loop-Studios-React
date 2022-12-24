function Link({ location }) {
	return (
		<a href='#'>
			<li className='underline-indicators inline-flex'>{location}</li>
		</a>
	);
}

export default Link;
