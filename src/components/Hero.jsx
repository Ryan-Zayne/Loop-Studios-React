import hamburger from '../assets/icon-hamburger.svg';

function Hero() {
	return (
		<header className='font-alata max-md:bg-hero md:bg-hero-desktop mobile-flex gap-[11rem] p-[1.7rem_2.5rem_17rem] text-white backdrop-brightness-[0.5] md:bg-[length:100%_100%] md:p-[3rem_5rem_7rem_9rem]'>
			<nav className='flex w-[100%] items-center justify-between'>
				<h1 className='text-[2.5rem]'>loopstudios</h1>
				<ul className='hidden text-[1.3rem] md:flex md:gap-[3.5rem]'>
					<li>About</li>
					<li>Event</li>
					<li>Career</li>
					<li>Support</li>
					<li>Product</li>
				</ul>

				<img className='md:hidden' src={hamburger} alt='' />
			</nav>

			<p className='font-josefin w-[13ch] border-2 p-[2rem] text-[3.3rem] font-[300] uppercase leading-[1] opacity-[0.85] md:w-[15ch] md:self-start'>
				Immersive experiences that deliver
			</p>
		</header>
	);
}

export default Hero;
