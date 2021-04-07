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
			<div className={socialMediaStyles.icon} onClick={() => window.open('https://github.com/kveperedo')}>
				<Image src="/images/githubicon.svg" width={24} height={24} alt="github link" />
			</div>
			<div className={socialMediaStyles.icon} onClick={() => window.open('https://www.linkedin.com/in/kveperedo/')}>
				<Image src="/images/linkedinicon.svg" width={24} height={24} alt="linkedin link" />
			</div>
			<div className={socialMediaStyles.icon} onClick={() => window.open('https://www.facebook.com/keboniinnn')}>
				<Image src="/images/fbicon.svg" width={24} height={24} alt="facebook link" />
			</div>
		</div>
	);
};

export default SocialMediaLinks;
