import Head from 'next/head';
import { useInView } from 'react-hook-inview';
import Particles from 'react-tsparticles';

import Divider from '../components/divider';
import Header from '../components/header';
import Home from '../components/home';
import AboutMe from '../components/aboutme';
import BasicInfo from '../components/basicinfo';
import Projects from '../components/projects';
import Footer from '../components/footer';
import { CurrentPage } from '../components/header';
import { options } from '../utils/particleOptions';

const observerOptions = { threshold: 0.25 };

const IndexPage = () => {
	const [homeRef, isHomeVisible, homeDiv] = useInView(observerOptions);
	const [aboutmeRef, isAboutMeVisible, aboutMeDiv] = useInView(observerOptions);
	const [basicInfoRef, isBasicInfoVisible, basicInfoDiv] = useInView(observerOptions);
	const [projectsRef, isProjectsVisible, projectsDiv] = useInView(observerOptions);

	const getCurrent = (): CurrentPage => {
		if (isHomeVisible) return 'home';
		if (isAboutMeVisible) return 'aboutme';
		if (isBasicInfoVisible) return 'basicinfo';
		if (isProjectsVisible) return 'projects';
	};

	const onMenuChange = (current: CurrentPage) => {
		let selectedPage: Element | null;
		switch (current) {
			case 'home':
				selectedPage = homeDiv?.target;
				break;
			case 'aboutme':
				selectedPage = aboutMeDiv?.target;
				break;
			case 'basicinfo':
				selectedPage = basicInfoDiv?.target;
				break;
			case 'projects':
				selectedPage = projectsDiv?.target;
				break;
			default:
				break;
		}

		selectedPage?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div>
			<Head>
				<title>Portfolio | Kevin Von Peredo</title>
				<link rel="icon" href="/images/logo.svg" />
				<meta name="description" content="A web portfolio by Kevin Von Erich Peredo, a front-end engineer."></meta>
			</Head>

			<Particles className="particles" options={options} />

			<Header current={getCurrent()} onMenuClick={onMenuChange} />
			<Home ref={homeRef} />
			<Divider />
			<AboutMe ref={aboutmeRef} />
			<Divider />
			<BasicInfo ref={basicInfoRef} />
			<Divider />
			<Projects ref={projectsRef} />
			<Divider />
			<Footer onMenuClick={onMenuChange} />

			<style jsx global>{`
				.particles {
					height: 100vh;
					position: absolute;
				}

				.particles canvas {
					filter: blur(10px);
					width: 100vw !important;
					height: 100vh !important;
				}
			`}</style>
		</div>
	);
};

export default IndexPage;
