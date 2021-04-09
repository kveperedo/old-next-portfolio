import Image from 'next/image';

import socialMediaStyles from './socialmedialinks.module.css';

interface Props {
	className?: string;
}

const SocialMediaLinks: React.FC<Props> = ({ className }) => {
	let containerClassName = socialMediaStyles.links;
	if (className) containerClassName += ` ${className}`;

	return (
		<div className={containerClassName}>
			<div className={socialMediaStyles.icon} onClick={() => window.open('mailto:kveperedo@gmail.com')}>
				<Image src="/images/email.svg" width={24} height={24} alt="email link" title="Email Me" />
			</div>
			<div className={socialMediaStyles.icon} onClick={() => window.open('https://github.com/kveperedo')}>
				<Image src="/images/githubicon.svg" width={24} height={24} alt="github link" title="Github Account" />
			</div>
			<div className={socialMediaStyles.icon} onClick={() => window.open('https://www.linkedin.com/in/kveperedo/')}>
				<Image src="/images/linkedinicon.svg" width={24} height={24} alt="linkedin link" title="LinkedIn Account" />
			</div>
		</div>
	);
};

export default SocialMediaLinks;
