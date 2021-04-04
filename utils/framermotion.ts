import { Variants } from 'framer-motion';

export const fadeVariants = (delay?: number, duration: number = 1): Variants => ({
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: duration,
			delay,
		},
	},
});
