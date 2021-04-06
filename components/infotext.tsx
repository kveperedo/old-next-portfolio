import InfoTextStyles from './infotext.module.css';

interface Props {
	title: string;
	subtitle: string;
	description: string;
}

const InfoText: React.FC<Props> = ({ title, description, subtitle }) => {
	return (
		<div className={InfoTextStyles.infoText}>
			<p className={InfoTextStyles.title}>{title}</p>
			<p className={InfoTextStyles.subtitle}>{subtitle}</p>
			<p className={InfoTextStyles.description}>{description}</p>
		</div>
	);
};

export default InfoText;
