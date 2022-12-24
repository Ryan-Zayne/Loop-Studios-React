import Navbar from './Navbar';

function Hero() {
	return (
		<header className='mobile-flex relative gap-[11rem] pb-[17rem] font-alata text-white backdrop-brightness-[0.5] max-md:bg-hero md:bg-hero-desktop md:bg-[length:100%_100%] md:p-[3rem_5rem_7rem_9rem]'>
			<Navbar />
			<p className='w-[13ch] border-2 p-[2rem] font-josefin text-[3.3rem] font-[300] uppercase leading-[1] opacity-[0.85] md:w-[15ch] md:self-start'>
				Immersive experiences that deliver
			</p>
		</header>
	);
}

export default Hero;
