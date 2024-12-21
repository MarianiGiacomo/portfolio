import { Project } from "../DataTypes"

const data: Project = {
	img: {
		width: 1130,
		height: 691,
		src: '/images/iwdap.jpg',
		alt: 'Screenshot from Introduction to Web Development and Programming homepage'
	},
	short: 'An online course where I have contributed as web developer and teaching assistant.',
	title: 'Introduction to Web Development and Programming',
	intro: `IWDAP is an online course, and a platform. I have been part of the project both as web developer,
	mainly developing the Q&A part of the platform, and as a teaching assistant, creating exercises and helping students.
	Below are the links to some of course platform and some of the exercises I have developed through the Aalto University 
	Acos Advanced Content Server.`,
	technologies: {
		frontend: ['Gatsby', 'React', 'TypeScript'],
		backend: ['Node', 'Express', 'TypeScript', 'MongoDB', 'Docker']
	},
	links: {
		Web: new URL('https://iwdap.cs.aalto.fi/'),
		'Developer tools exercise': new URL('https://acos.cs.hut.fi/html/webdev/webdev-inspector/modify_list'),
		'Find the right element exercise': new URL('https://acos.cs.hut.fi/html/webdev/webdev-editor/find_the_right_element'),
		'Remove element exercise': new URL('https://acos.cs.hut.fi/html/webdev/webdev-editor/remove_element'),
		'Modify element exercise': new URL('https://acos.cs.hut.fi/html/webdev/webdev-editor/modify_element_innerText'),
		Acos: new URL('https://github.com/acos-server/acos-server')
	}
}

export default data