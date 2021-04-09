import React, { forwardRef } from 'react';

import ProjectItem from './projectitem';
import projectStyles from './projects.module.css';
import { Project } from './projectitem';
import Divider from './divider';

interface Props {
	ref: React.Ref<HTMLDivElement>;
}

const projectList: Project[] = [
	{
		title: 'Noterist',
		subtitle: 'Sep 2020 - Present',
		description: 'A note-taking app using React and Redux, designed in Figma, and deployed using Firebase',
		imgSrc: '/images/noterist.png',
		links: [
			{ imgSrc: '/images/link.svg', link: 'https://kp-noterist.web.app/' },
			{ imgSrc: '/images/githubicon.svg', link: 'https://github.com/kveperedo/noterist' },
		],
	},
	{
		title: 'Landslide Detection Interface',
		subtitle: 'May 2019',
		description:
			'A web interface, for a thesis, for displaying landslide sensors data into graphs and text. Code base uses HTML, CSS and JavaScript (interface) and C/C++ (Arduino)',
		links: [
			{
				imgSrc: '/images/githubicon.svg',
				link: 'https://github.com/kveperedo/ProjectLandslide',
			},
		],
	},
	{
		title: 'Randomized Pattern Generator',
		subtitle: 'Dec 2017',
		description:
			'An Arduino-based device that tests the user’s short term memory capabilities with increasing difficulty. Code base uses C/C++ (Arduino)',
	},
];

const Projects: React.FC<Props> = forwardRef((_, ref) => {
	return (
		<div ref={ref} className={projectStyles.container}>
			<h1 className={projectStyles.header}>Projects</h1>
			{projectList.map((project, index, array) => {
				return (
					<React.Fragment key={project.title}>
						<ProjectItem {...project} />
						{index !== array.length - 1 && <Divider staticClassName={projectStyles.divider} isStatic />}
					</React.Fragment>
				);
			})}
		</div>
	);
});

export default Projects;
