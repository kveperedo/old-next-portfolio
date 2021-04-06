import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import aboutMeStyles from './aboutme.module.css';

interface Props {
	ref: React.Ref<HTMLDivElement>;
}

const AboutMe: React.FC<Props> = forwardRef((_, ref) => {
	return (
		<div ref={ref} className={aboutMeStyles.container}>
			<h3 className={aboutMeStyles.header}>About Me</h3>
			<p>
				Hello! My name is <span className={aboutMeStyles.blue}>Kevin</span>. I am 23 years old.
			</p>
			<p>
				I am an <span className={aboutMeStyles.green}>electronics engineering</span> graduate from Saint Louis
				University in Baguio City.
			</p>
			<p>
				Passed the electronics engineering and electronics technician
				<span className={aboutMeStyles.purple}> board exams</span> in 2019.
			</p>
			<p>
				I am a self-taught <span className={aboutMeStyles.red}>Front-End Developer</span> with knowledge in HTML, CSS,
				JavaScript and currently learning TypeScript and React frameworks.
			</p>
			<p>
				Currently working at <span className={aboutMeStyles.blue}>SQREEM Technologies</span> as a software engineer
				since 2020.
			</p>
			<p>
				My <span className={aboutMeStyles.green}>hobbies</span> are: love for computers and mechanical keyboards,
				playing badminton, watching Netflix and YouTube, playing various video games, learning software technologies and
				admiring aesthetic UI designs.
			</p>
			<p>
				<span className={aboutMeStyles.red}>Music genres</span> that I enjoy are RnB, Jazz Lo-FI, Funk and Electronic
				Pop. You can follow my Spotify playlist here:{' '}
				<motion.a whileHover={{ color: '#127435' }} onClick={() => window.open('https://www.sptfy.com/kebon')}>
					sptfy.com/kebon
				</motion.a>
			</p>
			<p>
				My ultimate goal is to become a <span className={aboutMeStyles.purple}>Full Stack Engineer</span>.
			</p>
		</div>
	);
});

export default AboutMe;
