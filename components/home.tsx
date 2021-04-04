import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeVariants } from '../utils/framermotion';
import homeStyles from './home.module.css';

const Home = () => {
	return (
		<div className={homeStyles.main}>
			<div className={homeStyles.container}>
				<motion.div className={homeStyles.profileImage} variants={fadeVariants()} initial="hidden" animate="visible">
					<Image
						layout="fill"
						objectFit="cover"
						objectPosition="50% -25px"
						src="/images/profile.png"
						quality={100}
						alt="profile picture"
					/>
				</motion.div>

				<section className={homeStyles.intro}>
					<motion.h3 className={homeStyles.greeting} variants={fadeVariants()} initial="hidden" animate="visible">
						Hello, I am
					</motion.h3>
					<motion.h1 className={homeStyles.name} variants={fadeVariants(0.2)} initial="hidden" animate="visible">
						Kevin Von Erich Peredo
					</motion.h1>
					<motion.h3 className={homeStyles.title} variants={fadeVariants(0.4)} initial="hidden" animate="visible">
						Front-End Engineer
					</motion.h3>
					<motion.p variants={fadeVariants(0.6)} initial="hidden" animate="visible">
						A Front-End Engineer with experience in building and maintaining world-class web applications. Proficient in
						front-end technologies like HTML, CSS, JavaScript; plus modern libraries and frameworks, passionate about
						aesthetic and functional UI design and development and willing to learn and master other aspects in software
						development (Back-end Development, Mobile Development, Machine Learning and Artificial Intelligence).
					</motion.p>
				</section>

				<div className={homeStyles.card}>
					<button className={homeStyles.resume} onClick={() => window.open('/resumenew.pdf')}>
						Get Resume
					</button>
					<div className={homeStyles.contact}>
						<div onClick={() => navigator.clipboard.writeText('kveperedo@gmail.com')}>
							<Image src="/images/aticon.svg" width={16} height={16} alt="email logo" />
							<p>kveperedo@gmail.com</p>
						</div>
						<div onClick={() => navigator.clipboard.writeText('+639178627621')}>
							<Image src="/images/phoneicon.svg" width={16} height={16} alt="phone logo" />
							<p>63 917 862 7621</p>
						</div>
					</div>
					<div className={homeStyles.links}>
						<div className={homeStyles.icon} onClick={() => window.open('https://github.com/kveperedo')}>
							<Image src="/images/githubicon.svg" width={24} height={24} alt="github link" />
						</div>
						<div className={homeStyles.icon} onClick={() => window.open('https://www.linkedin.com/in/kveperedo/')}>
							<Image src="/images/linkedinicon.svg" width={24} height={24} alt="linkedin link" />
						</div>
						<div className={homeStyles.icon} onClick={() => window.open('https://www.facebook.com/keboniinnn')}>
							<Image src="/images/fbicon.svg" width={24} height={24} alt="facebook link" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
