import Image from 'next/image';

import SocialMediaLinks from './socialmedialinks';
import ContactDetails from './contactdetails';
import footerStyles from './footer.module.css';
import { CurrentPage } from './header';

interface Props {
	onMenuClick: (current: CurrentPage) => void;
}

const Footer: React.FC<Props> = ({ onMenuClick }) => {
	return (
		<footer className={footerStyles.footer}>
			<SocialMediaLinks className={footerStyles.socialMedia} />
			<ContactDetails />
			<ul className={footerStyles.navigation}>
				<div>
					<li onClick={() => onMenuClick('home')}>
						<Image src="/images/home.svg" width={32} height={32} alt="Home icon" />
						<p>Home</p>
					</li>
					<li onClick={() => onMenuClick('aboutme')}>
						<Image src="/images/aboutme.svg" width={32} height={32} alt="About Me icon" />
						<p>About Me</p>
					</li>
				</div>
				<div>
					<li onClick={() => onMenuClick('projects')}>
						<Image src="/images/projects.svg" width={32} height={32} alt="Project icon" />
						<p>Projects</p>
					</li>
					<li onClick={() => onMenuClick('basicinfo')}>
						<Image src="/images/basicinfo.svg" width={32} height={32} alt="Basic Info icon" />
						<p>Basic Info</p>
					</li>
				</div>
			</ul>
			<p className={footerStyles.copyright}>©2021 Kevin Peredo | All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
