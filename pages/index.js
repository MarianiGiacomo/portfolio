import Image from 'next/image'
import Head from 'next/head'

import Layout, { siteTitle } from '../components/container/layout'
import { Card } from '../components/presentational/card'
import Tag from '../components/presentational/tag'

import data from '../data'
import { extractUniqueTech } from '../helpers'

export default function Home() {
  return (
		<Layout home>

			<Head>
        <title>{siteTitle}</title>
      </Head>
		
			<section className="text-2xl sm:flex sm:flex-row mt-5 justify-center">
				<div className="mt-5 text-center">
					<Image
						priority
						src="/images/profile-square.png"
						height={150}
						width={150}
						alt="Giacomo Mariani"
						className="rounded-full h-24 w-24"
					/>
				</div>
				<div className="p-2 mt-5">
					<h1 className="mb-5">Hi! I am <b>Giacomo Mariani.</b></h1>
					<h2 className="md:ml-9 md:pl-9">This is my web development portfolio.</h2>
				</div>
      </section>

			<section>
				<h2 className="text-xl font-medium mb-1 mt-3 text-center">Projects</h2>
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
			</section>
			
			<section>
				<h2 className="text-xl font-medium mb-1 mt-3 text-center">Technologies</h2>
				<div className="flex flex-wrap mb-10 mt-3">
					{ Array.from(extractUniqueTech(data.webApps)).concat('SQL').map( (t, i) => <Tag key={i} text={t} />)}
				</div>
			</section>

		</Layout>
  )
}
