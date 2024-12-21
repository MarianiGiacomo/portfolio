import { Project } from "../DataTypes"

const data: Project = {
	img: {
		width: 1215,
		height: 810,
		src: '/images/favoriteblogs.jpg',
		alt: 'Screenshot from favorite blogs application homepage'
	},
	short: `A web application to save and share your favorite blog.`,
	title: 'Favorite Blogs web app',
	intro: `Initially I developed this application when I took a full stack web development course.
	I kept maintaining and updating it, and added some extra features not present in the original verison.`,
	technologies: {
		frontend: ['React', 'Jest', 'Cypress'],
		backend: ['Node', 'Express', 'MongoDB']
	},
	links: {
		Web: new URL('https://favoriteblogs.herokuapp.com/'),
		GitHub: new URL('https://github.com/MarianiGiacomo/favoriteblogs'),
	}
}

export default data