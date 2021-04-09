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
		title: 'Personal Portfolio',
		subtitle: 'March 2021 - Present',
		description:
			'A Next.js personal portfolio. I made this portfolio to showcase my projects, relevant skills and abilities, and basic information needed. A mobile-first design approach was used for better user experiences both in mobile and desktop. Technologies and tools used are Next.js, React, Typescript, Framer Motion and CSS Modules.',
		imgSrc: '/images/portfolio.png',
		links: [
			{ imgSrc: '/images/link.svg', link: 'https://kevinperedo.vercel.app/' },
			{ imgSrc: '/images/githubicon.svg', link: 'https://github.com/kveperedo/portfolio' },
		],
	},
	{
		title: 'Noterist',
		subtitle: 'Sep 2020 - Present',
		description:
			'A note-taking app using React and Redux, designed in Figma, and deployed using Firebase. This is my first major personal project made in React after I finished the React and Redux course. Current features include a scratchpad for quick note-taking and a note section for more complicated formatting.',
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
			'A user interface for displaying landslide sensors data into graphs and text. Code base uses HTML, CSS and JavaScript (interface) and C/C++ (Arduino). This interface was primarily used for our thesis in the 5th year (ECE) and it served as a meaningful guide for the data from our landslide sensors.',
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
			'An Arduino-based device that tests the user’s short term memory capabilities with increasing difficulty. Code base uses C/C++ (Arduino).',
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
