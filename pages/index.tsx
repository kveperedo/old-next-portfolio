import Head from 'next/head';

import AboutMe from '../components/aboutme';
import Container from '../components/container';
import Divider from '../components/divider';
import Header from '../components/header';
import Home from '../components/home';

const IndexPage = () => {
	return (
		<div>
			<Head>
				<title>Portfolio | Kevin Von Peredo</title>
				<link rel="icon" href="/images/logo.svg" />
			</Head>

			<Container>
				<Header />
				<Home />
				<Divider />
				<AboutMe />

				<div style={{ height: '5000px' }}></div>
			</Container>

			{/* <footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer> */}
		</div>
	);
};

export default IndexPage;
