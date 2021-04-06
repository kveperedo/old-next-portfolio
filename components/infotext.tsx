import InfoTextStyles from './infotext.module.css';

interface Props {
	title: string;
	subtitle: string;
	description: string;
	titleAddOns?: React.ReactNode;
}

const InfoText: React.FC<Props> = ({ title, description, subtitle, titleAddOns }) => {
	return (
		<div className={InfoTextStyles.infoText}>
			<div className={InfoTextStyles.titleContainer}>
				<p className={InfoTextStyles.title}>{title}</p>
				{titleAddOns && titleAddOns}
			</div>
			<p className={InfoTextStyles.subtitle}>{subtitle}</p>
			<p className={InfoTextStyles.description}>{description}</p>
		</div>
	);
};

export default InfoText;
