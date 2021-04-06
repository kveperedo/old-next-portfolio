import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants, useCycle } from 'framer-motion';

import { fadeVariants } from '../utils/framermotion';
import headerStyles from './header.module.css';
import { throttle } from '../utils/helpers';

export type CurrentPage = 'home' | 'aboutme' | 'basicinfo' | 'projects';

interface HeaderList {
	src: string;
	name: string;
	alt: string;
	id: string;
}
interface Props {
	current: CurrentPage;
	onMenuClick: (current: CurrentPage) => void;
}

const headerVariants: Variants = {
	expanded: {
		backgroundColor: 'var(--white)',
		filter: 'drop-shadow(1px 1px 32px rgba(0, 0, 0, 0.25))',
	},
	collapsed: {
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const imgSrc = {
	close: '/images/close.svg',
	open: '/images/menu.svg',
};

const headerList: HeaderList[] = [
	{
		name: 'Home',
		id: 'home',
		alt: 'Home icon',
		src: '/images/home.svg',
	},
	{
		name: 'About Me',
		id: 'aboutme',
		alt: 'About Me icon',
		src: '/images/aboutme.svg',
	},
	{
		name: 'Basic Information',
		id: 'basicinfo',
		alt: 'Basic Information icon',
		src: '/images/basicinfo.svg',
	},
	{
		name: 'Projects',
		id: 'projects',
		alt: 'Projects icon',
		src: '/images/projects.svg',
	},
];

const Header: React.FC<Props> = ({ current, onMenuClick }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [headerAnimation, cycleHeaderAnimation] = useCycle('expanded', 'collapsed');

	useEffect(() => {
		cycleHeaderAnimation();
	}, [isOpen]);

	useEffect(() => {
		const onScroll = throttle(() => {
			if (isOpen) setIsOpen(false);
		}, 1000);

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [isOpen, setIsOpen]);

	return (
		<motion.header
			variants={headerVariants}
			initial="collapsed"
			animate={headerAnimation}
			layout
			className={headerStyles.header}
		>
			<motion.div layout>
				<Image width={32} height={32} src="/images/logo.svg" alt="home logo" onClick={() => onMenuClick('home')} />
				<motion.p
					layout
					className={headerStyles.name}
					// variants={fadeVariants(0, 0.5)}
					style={{ originX: 'center', originY: 'center' }}
					variants={{ expanded: { opacity: 1, transition: { ease: 'easeInOut' } }, collapsed: { opacity: 0 } }}
					initial="collapsed"
					animate={headerAnimation}
				>
					Kevin Von Peredo
				</motion.p>
				<AnimatePresence exitBeforeEnter>
					<motion.img
						key={isOpen ? imgSrc.close : imgSrc.open}
						src={isOpen ? imgSrc.close : imgSrc.open}
						variants={fadeVariants(0, 0.2)}
						initial="hidden"
						animate="visible"
						onClick={() => setIsOpen(!isOpen)}
					/>
				</AnimatePresence>
			</motion.div>
			<AnimatePresence exitBeforeEnter>
				{isOpen && (
					<motion.div
						layout
						className={headerStyles.container}
						variants={{
							expanded: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
					>
						<motion.section layout className={headerStyles.menu}>
							{headerList.map(item => {
								const className = current === item.id ? headerStyles.selected : '';

								return (
									<div key={item.id} onClick={() => onMenuClick(item.id as CurrentPage)}>
										<Image src={item.src} width={32} height={32} alt={item.alt} />
										<p className={className}>{item.name}</p>
									</div>
								);
							})}
						</motion.section>

						<div className={headerStyles.contact}>
							<div onClick={() => navigator.clipboard.writeText('kveperedo@gmail.com')}>
								<Image src="/images/aticon.svg" width={16} height={16} alt="email logo" />
								<p>kveperedo@gmail.com</p>
							</div>
							<div onClick={() => navigator.clipboard.writeText('+639178627621')}>
								<Image src="/images/phoneicon.svg" width={16} height={16} alt="phone logo" />
								<p>63 917 862 7621</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
