import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg';
import pinterest from '../assets/icon-pinterest.svg';

function Footer() {
	return (
		<footer className='mobile-flex mt-[7.3rem] gap-[4rem] bg-black py-[3rem] md:flex-row md:justify-between md:px-[8rem]'>
			<div className='mobile-flex md: gap-[2rem] md:items-start md:gap-[1.5rem]'>
				<h4 className='font-josefin text-[2.5rem] font-[500] text-white'>loopstudios</h4>
				<ul className='mobile-flex font-josefin gap-[1.5rem] text-[1.3rem] text-white/[0.85] md:flex-row'>
					<li>About</li>
					<li>Event</li>
					<li>Career</li>
					<li>Products</li>
					<li>Support</li>
				</ul>
			</div>

			<div className='mobile-flex gap-[1.5rem]'>
				<picture className='flex gap-[1rem] '>
					<img className='scale-[0.73]' src={facebook} alt='icon' />
					<img className='scale-[0.73]' src={twitter} alt='icon' />
					<img className='scale-[0.73]' src={pinterest} alt='icon' />
					<img className='scale-[0.73]' src={instagram} alt='icon' />
				</picture>
				<p className='font-alata text-Very-Dark-Gray text-[1.3rem]'>
					© 2021 Loopstudios. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
