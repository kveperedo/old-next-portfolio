import Head from 'next/head';

import AboutMe from '../components/aboutme';
import Header from '../components/header';
import Home from '../components/home';

const IndexPage = () => {
	return (
		<div>
			<Head>
				<title>Portfolio | Kevin Von Peredo</title>
				<link rel="icon" href="/images/logo.svg" />
			</Head>

			<Header />
			<Home />
			<AboutMe />

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
