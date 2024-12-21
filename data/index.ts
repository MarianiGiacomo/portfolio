import favoriteBlogs from  './projects/favorite-blogs'
import iwdap from './projects/iwdap'
import jsavPlayer from './projects/jsav-player'
import portfolio from './projects/portfolio'
import zlibPump from './projects/zlib-pump'
import accessibleModal from './projects/accessible-modal'
import articles from './publications'
import { DataType } from './DataTypes'

const firstName = 'Giacomo'
const lastName = 'Mariani'

const data: DataType = {
	firstName,
	lastName,
	gitHub: 'https://github.com/MarianiGiacomo',
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
	projects: { 
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

export default data