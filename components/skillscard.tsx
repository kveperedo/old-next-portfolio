import skillsCardStyles from './skillscard.module.css';

interface Props {
	imageSrc: string;
	title: string;
	skills: string[];
}

const SkillsCard: React.FC<Props> = ({ imageSrc, skills, title }) => {
	return (
		<div
			style={{ background: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPositionX: 'center' }}
			className={skillsCardStyles.skillsCard}
		>
			<div className={skillsCardStyles.container}>
				<p className={skillsCardStyles.title}>{title}</p>
				{skills.map(skill => {
					return (
						<p className={skillsCardStyles.skill} key={skill}>
							{skill}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default SkillsCard;
