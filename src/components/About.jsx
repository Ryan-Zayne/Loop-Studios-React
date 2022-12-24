import interactive from '../assets/mobile/image-interactive.jpg';
import interactive2 from '../assets/desktop/image-interactive.jpg';


function About() {
	return (
		<section className='mobile-flex mt-[7.5rem] md:my-[11rem] '>
			<div className='mobile-flex md:w-[100%] md:flex-row md:justify-center'>
				<picture className='w-[min(auto,32.4rem)] md:w-[50rem]'>
					<source srcSet={interactive} media='(min-width: 768)' />
					<img src={interactive2} alt='' />
				</picture>
				<div className='bg-White max-md:text-center md:ml-[-11rem] md:self-end md:pl-[7rem] '>
					<h2 className='heading w-[16ch] [margin-block:3.4rem_2.5rem] md:self-start md:text-[3.6rem]'>
						The leader in interactive VR
					</h2>
					<p className='w-[29ch] font-alata text-[1.4rem] text-Dark-Gray md:w-[46ch] md:text-[1.2rem]'>
						Founded in 2011, Loopstudios been producing world-class virtual reality projects for some of
						the best companies around the globe. Our award-winning creations have transformed businesses
						through digital experiences that bind to their brand.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
