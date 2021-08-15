import favoriteBlogs from  './webapps/favorite-blogs'
import iwdap from './webapps/iwdap'
import jsavPlayer from './webapps/jsav-player'
import portfolio from './webapps/portfolio'
import zlibPump from './webapps/zlib-pump'
import articles from './publications'

const firstName = 'Giacomo'
const lastName = 'Mariani'

export default {
	firstName,
	lastName,
	profileImg: {
		src: '/images/profile.png', 
		width: 150,
		height: 150
	},
	home: {
		heading: `Hi!, I am ${firstName} ${lastName}.`,
		intro: `This is my web development portfolio`
	},
	webApps: { 
		'favorite-blogs': favoriteBlogs,
		'zlib-pump': zlibPump,
		iwdap,
		'jsav-player': jsavPlayer,
		portfolio,
	},
	publications: {
		intro: `I am a doctoral student at the Computer Science department of Aalto University. Here are my academic publications.`,
		articles,
	}
}