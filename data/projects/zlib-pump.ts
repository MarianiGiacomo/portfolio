import { Project } from '../DataTypes';

const data: Project = {
  img: {
    width: 1130,
    height: 691,
    src: '/images/zlibpump.jpg',
    alt: 'Screenshot from Zlib Pump homepage',
  },
  short: 'A web application to inflate and deflate zlib strings.',
  title: 'Zlib Pump',
  intro: `Zlib Pump is a web application to deflate strings from ASCII and Hex, to Hex and Base64 using zlib.
	I first developed the application when I need such a tool for a catch-the-flag challange. Later I improved it and
	decided to share it online, since I could not find a similar tool when I needed it.`,
  technologies: {
    frontend: ['React', 'Jest', 'Firebase'],
    backend: ['Node', 'Express', 'Firebase', 'Cloud Functions'],
  },
  links: {
    Web: new URL('https://zlibpump.web.app/'),
    GitHub: new URL('https://github.com/MarianiGiacomo/zlibPump'),
  },
};

export default data;
