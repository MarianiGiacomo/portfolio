import { Project } from "../DataTypes";

const data: Project = {
	img: {
		width: 1200,
		height: 628,
		src: '/images/jsav-player.jpg',
		alt: `Screenshot from the homepage of the test application for recording and replaying 
		visual algorithm simulation exercises`
	},
	short: 'A test application for recording and replaying visual algorithm simulation exercises.',
	title: 'Visual Algorithm Simulations Recorder & Player',
	intro: `This project started as my master thesis. The aim was to develop a way to record and replay 
	students submissions from visual algorithm simulation exercises. The exercises are from an existing repository,
	and they have been created using the JSAV library. I developed the Exercise Recorder module, which can be
	attached to those type of exercises, and the Exercise Recorder module, which recreates the exercise submission's
	actions from the stored trace. The test application simulates a Learning Management System, which loads the 
	exercises, the Exercise Recorder, and the Exercise Player from an external service, a test server I created for
	testing purposes.`,
	technologies: {
		frontend: ['React', 'jQuery'],
		backend: ['Node', 'Express', 'MongoDB']
	},
	links: {
		Web: new URL('https://jsav-player-test-app.firebaseapp.com/'),
		'GitHub test application': new URL('https://github.com/MarianiGiacomo/jsav-player-application-test-app'),
		'GitHub Exercise Recorder': new URL(`https://github.com/MarianiGiacomo/jsav-exercise-recorder`),
		'GitHub Exercise Player': new URL(`https://github.com/MarianiGiacomo/jsav-exercise-player`),
		'GitHub test server': new URL(`https://github.com/MarianiGiacomo/jsav-player-application-test-server`),
		Publication: new URL(`https://aaltodoc.aalto.fi/bitstream/handle/123456789/44448/master_Mariani_Giacomo_2020.pdf?sequence=1&isAllowed=y`)
	}
}

export default data;