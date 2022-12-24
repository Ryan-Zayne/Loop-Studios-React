import { useState } from 'react';
import Link from './Link';
import About from './About';

function Navbar() {
	const [isClose, setIsClose] = useState(false);

	const hamburgerToggler = () => {
		setIsClose((prevState) => !prevState);
	};

	return (
		<>
			{isClose && (
				<div onClick={hamburgerToggler} className='overlay'>
					{/* Overlay here*/}
				</div>
			)}

			<nav className='flex w-[100%] items-center justify-between pt-[1.7rem] [padding-inline:2.5rem]'>
				<h1 className='text-[2.5rem]'>loopstudios</h1>

				<ul
					className={`nav-list text-[1.5rem] md:flex md:gap-[3.5rem] md:text-[1.3rem]
					${isClose ? 'toggle' : ''}`}
				>
					<Link location={'About'} />
					<Link location={'Event'} />
					<Link location={'Career'} />
					<Link location={'Support'} />
					<Link location={'Product'} />
				</ul>

				<button className={`hamburger  ${isClose ? 'close' : ''} md:hidden`} onClick={hamburgerToggler}>
					{/* CSS Background image here */}
				</button>
			</nav>
		</>
	);
}

export default Navbar;
