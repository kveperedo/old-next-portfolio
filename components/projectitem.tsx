import Image from 'next/image';
import React from 'react';

import InfoText from './infotext';
import projectItemStyles from './projectitem.module.css';

interface Links {
	imgSrc: string;
	link: string;
}

export interface Project {
	imgSrc?: string;
	title: string;
	subtitle: string;
	description: string;
	links?: Links[];
}

const ProjectItem: React.FC<Project> = ({ description, subtitle, title, imgSrc, links }) => {
	const renderLinks = () => {
		if (!links?.length) return null;

		return (
			<div className={projectItemStyles.links}>
				{links.map(link => (
					<React.Fragment key={link.imgSrc}>
						<a className={projectItemStyles.linkMobile} href={link.link} target="_blank" key={link.imgSrc}>
							<Image src={link.imgSrc} width={16} height={16} />
						</a>
						<a className={projectItemStyles.linkTablet} href={link.link} target="_blank" key={link.imgSrc}>
							<Image src={link.imgSrc} width={24} height={24} />
						</a>
					</React.Fragment>
				))}
			</div>
		);
	};

	return (
		<div>
			{imgSrc && (
				<div className={projectItemStyles.image}>
					<Image src={imgSrc} alt="Project image" layout="fill" objectFit="cover" />
				</div>
			)}
			<InfoText title={title} subtitle={subtitle} description={description} titleAddOns={renderLinks()} />
		</div>
	);
};

export default ProjectItem;
