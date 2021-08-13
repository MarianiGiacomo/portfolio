import Image from 'next/image'
import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import { Card } from '../components/card'
import Tag from '../components/tag'

import data from '../data'

export default function Home() {
  return (
		<Layout home>

			<Head>
        <title>{siteTitle}</title>
      </Head>
		
			<section className="text-2xl sm:flex sm:flex-row mt-5">
				<div className="mt-5 text-center">
					<Image
						priority
						src="/images/profile.png"
						height={200}
						width={150}
						alt="Giacomo Mariani"
						className="rounded-full h-24 w-24"
					/>
				</div>
				<div className="p-2 mt-5">
					<h1 className="mb-5">Hi! I am <b>Giacomo Mariani.</b></h1>
					<h2 className="text-right">This is my web development portfolio. Here you can see some of my projects.</h2>
				</div>
      </section>

			<div className="sm:flex sm:flex-wrap gap-5 justify-between mt-8 mb-5 mr-auto ml-auto w-11/12">

					<Card 
						link="/webapps/favorite-blogs"
						heading="Favorite Blogs web app &rarr;"
						text="A web application to save and share your favorite blogs"
					/>

					<Card 
						link="/webapps/zlib-pump"
						heading="Zlib Pump web app &rarr;"
						text="A web application to inflate and deflate zlib strings"
					/>

					<Card
						link="/webapps/jsav-player"
						heading="Record and replay algorithm exercises &rarr;"
						text="A test application for recording and replaying visual algorithm simulation exercises"
					/>

					<Card
						link="/webapps/iwdap"
						heading="Introduction to Web Development and Programming &rarr;"
						text="An online course where I have contributed as web developer and teaching assistant"
					/>
			
					<Card
						link="/webapps/portfolio"
						heading="Web Development Portfolio &rarr;"
						text="This web site I created to share my web development projects"
					/>
			</div>

			<div>
				<h2 className="text-xl font-medium mb-1 mb-4">Skills</h2>
				{ extractSkills(data.webApps.favoriteBlogs.technologies).map( t => <Tag text={t} />)}
			</div>

		</Layout>
  )
}

const extractSkillsFromData = (data) {
}

const extractSkillsFromTech = (technologies) => {
	if(Array.isArray(technologies)) {
		return technologies
	} else {
		const frontendTech = extractSkills(technologies.frontend)
		const backendTech = extractSkills(technologies.backend)
		return frontendTech.concat(backendTech)
	}
}
