import favoriteBlogs from  './webapps/favorite-blogs'
import iwdap from './webapps/iwdap'
import jsavPlayer from './webapps/jsav-player'
import portfolio from './webapps/portfolio'
import zlibPump from './webapps/zlib-pump'
import accessibleModal from './webapps/accessible-modal'
import articles from './publications'

const firstName = 'Giacomo'
const lastName = 'Mariani'

export default {
	firstName,
	lastName,
	gitHub: 'https://github.com/MarianiGiacomo',
	twitter: 'https://www.twitter.com/@jamomani',
	linkedin: 'https://www.linkedin.com/in/giacomo-mariani/',
	email: 'giacomo.mariani@gmail.com',
	blog: 'https://giacomo-mariani.medium.com/',
	CV: 'https://www.dropbox.com/s/c68ci7yt7hydped/Giacomo_Mariani_CV.pdf?dl=0',
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
		'accessible-modal': accessibleModal,
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