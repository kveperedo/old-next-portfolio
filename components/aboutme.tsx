import aboutMeStyles from './aboutme.module.css';

const AboutMe = () => {
	return (
		<div className={aboutMeStyles.main}>
			<div className={aboutMeStyles.container}>
				<h3 className={aboutMeStyles.header}>ABOUT ME</h3>
				<p>
					Hello! My name is <span className={aboutMeStyles.blue}>Kevin</span>. I am 23 years old.
				</p>
				<p>
					I am an <span className={aboutMeStyles.orange}>electronics engineering</span> graduate from Saint Louis
					University in Baguio City.
				</p>
				<p>
					Passed the electronics engineering and electronics technician{' '}
					<span className={aboutMeStyles.green}>board exams</span> in 2019.
				</p>
				<p>
					I am a self-taught <span className={aboutMeStyles.yellow}>Front-End Developer</span> with knowledge in HTML,
					CSS, JavaScript and currently learning TypeScript and React frameworks.
				</p>
				<p>
					Currently working at <span className={aboutMeStyles.blue}>SQREEM Technologies</span> as a software engineer
					since 2020.{' '}
				</p>
				<p>
					My <span className={aboutMeStyles.orange}>hobbies</span> are: love for computers and mechanical keyboards,
					playing badminton, watching Netflix and YouTube, playing various video games, learning software technologies
					and admiring aesthetic UI designs.
				</p>
				<p>
					<span className={aboutMeStyles.yellow}>Music genres</span> that I enjoy are RnB, Jazz Lo-FI, Funk and
					Electronic Pop. You can follow my Spotify playlist here: sptfy.com/kebon
				</p>
				<p>
					My ultimate goal is to become a <span className={aboutMeStyles.green}>Full Stack Engineer</span>.
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
