import Image from 'next/image';

import contactStyles from './contactdetails.module.css';

interface Props {
	className?: string;
}

const ContactDetails: React.FC<Props> = ({ className }) => {
	let containerClassName = contactStyles.contact;
	if (className) containerClassName += ` ${className}`;

	return (
		<div className={containerClassName}>
			<div onClick={() => navigator.clipboard.writeText('kveperedo@gmail.com')}>
				<Image src="/images/aticon.svg" width={16} height={16} alt="email logo" />
				<p>kveperedo@gmail.com</p>
			</div>
			<div onClick={() => navigator.clipboard.writeText('+639178627621')}>
				<Image src="/images/phoneicon.svg" width={16} height={16} alt="phone logo" />
				<p>63 917 862 7621</p>
			</div>
		</div>
	);
};

export default ContactDetails;
