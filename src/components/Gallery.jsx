import {
	earth,
	nightArcade,
	soccer,
	grid,
	fromAbove,
	pocket,
	curiosity,
	fisheye,
	earth2,
	nightArcade2,
	soccer2,
	grid2,
	fromAbove2,
	pocket2,
	curiosity2,
	fisheye2
} from '../lib';


function Gallery() {
	const images = [
		[1, earth, earth2, 'Deep Earth'],
		[2, nightArcade, nightArcade2, 'Night Arcade'],
		[3, soccer, soccer2, 'Soccer Team VR'],
		[4, grid, grid2, 'The Grid'],
		[5, fromAbove, fromAbove2, 'From Up ABove VR'],
		[6, pocket, pocket2, 'Pocket Borealis'],
		[7, curiosity, curiosity2, 'The Curiosity'],
		[8, fisheye, fisheye2, 'Make It Fisheye'],
	];

	const imageArray = images.map(([id, mobilePic, desktopPic, title]) => (
		<picture className='relative max-md:w-[min(auto,32.4rem)]' key={id}>
			<source media='(min-width: 768px)' srcSet={desktopPic} />
			<img className='brightness-[0.6]' src={mobilePic} alt='' />
			<p className='absolute bottom-[1rem] left-[1.9rem] w-[9ch] font-josefin text-[1.8rem] font-[300] uppercase text-white opacity-[0.75]'>
				{title}
			</p>
		</picture>
	));

	return (
		<section className='grid-in-stylesheet mt-[7rem] flex flex-col items-center gap-[2rem]'>
			<h3 className='heading max-md:mb-[2.5rem] max-md:w-[16ch]'>Our Creations</h3>
			{imageArray}
			<button className='btn hover:bg-gray-600 hover:text-White max-md:mt-[1rem]'>See All</button>
		</section>
	);
}

export default Gallery;
