import { motion } from 'framer-motion';

import dividerStyles from './divider.module.css';

interface Props {
	isStatic?: boolean;
}

const Divider: React.FC<Props> = ({ isStatic }) => {
	if (isStatic) return <div className={dividerStyles.static}></div>;
	return (
		<div className={dividerStyles.main}>
			<motion.div
				animate={{
					left: ['90%', '0%', '90%'],
					backgroundColor: ['var(--blue-crayola)', 'var(--han-purple)', 'var(--blue-crayola)'],
					transition: { repeat: Infinity, duration: 5 },
				}}
				className={dividerStyles.animation}
			></motion.div>
		</div>
	);
};

export default Divider;
