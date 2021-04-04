import { motion, Variants } from 'framer-motion';

import dividerStyles from './divider.module.css';

const Divider = () => {
	return (
		<div className={dividerStyles.main}>
			<motion.div
				animate={{ left: ['90%', '0%', '90%'], transition: { repeat: Infinity, duration: 5 } }}
				className={dividerStyles.animation}
			></motion.div>
		</div>
	);
};

export default Divider;
