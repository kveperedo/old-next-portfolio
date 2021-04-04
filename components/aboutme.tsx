import aboutMeStyles from '../styles/aboutme.module.css';

const AboutMe = () => {
	return (
		<div className={aboutMeStyles.container}>
			<h3 className={aboutMeStyles.header}>About Me</h3>
			<p>Hello! My name is Kevin. I am 23 years old.</p>
			<p>I am an electronics engineering graduate from Saint Louis University in Baguio City.</p>
			<p>Passed the electronics engineering and electronics technician board exams in 2019.</p>
			<p>
				I am a self-taught Front-End Developer with knowledge in HTML, CSS, JavaScript and currently learning TypeScript
				and React frameworks.
			</p>
			<p>Currently working at SQREEM Technologies as a software engineer since 2020. </p>
			<p>
				My hobbies are: love for computers and mechanical keyboards, playing badminton, watching Netflix and YouTube,
				playing various video games, learning software technologies and admiring aesthetic UI designs.
			</p>
			<p>
				Music genres that I enjoy are RnB, Jazz Lo-FI, Funk and Electronic Pop. You can follow my Spotify playlist here:
				sptfy.com/kebon
			</p>
			<p>My ultimate goal is to become a Full Stack Engineer.</p>
		</div>
	);
};

export default AboutMe;
