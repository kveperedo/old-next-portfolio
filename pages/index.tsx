import Head from 'next/head';
import { useInView } from 'react-hook-inview';
import Particles from 'react-tsparticles';

import Divider from '../components/divider';
import Header from '../components/header';
import Home from '../components/home';
import AboutMe from '../components/aboutme';
import BasicInfo from '../components/basicinfo';
import { CurrentPage } from '../components/header';
import { particleOptions } from '../utils/particleOptions';

const IndexPage = () => {
	const [homeRef, isHomeVisible, homeDiv] = useInView();
	const [aboutmeRef, isAboutMeVisible, aboutMeDiv] = useInView();
	const [basicInfoRef, isBasicInfoVisible, basicInfoDiv] = useInView();

	const getCurrent = (): CurrentPage => {
		if (isBasicInfoVisible) return 'basicinfo';
		if (isAboutMeVisible) return 'aboutme';
		if (isHomeVisible) return 'home';
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
			</Head>

			<Particles className="particles" options={particleOptions} />

			<Header current={getCurrent()} onMenuClick={onMenuChange} />
			<Home ref={homeRef} />
			<Divider />
			<AboutMe ref={aboutmeRef} />
			<Divider />
			<BasicInfo ref={basicInfoRef} />
			<Divider />

			{/* <footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer> */}
			<style jsx global>{`
				.particles {
					height: 100vh;
					width: 100vw;
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
