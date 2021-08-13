import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { Card } from '../components/card'

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
					<p className="mb-5">Hi! I am <b>Giacomo Mariani.</b></p>
					<p className="text-right">This is my web development portfolio. Here you can see some of my projects.</p>
				</div>
      </section>

			<div className="flex flex-wrap gap-5 justify-center mt-8 mb-20">

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
						text="A test application for the recorder and player of visual algorithm simulation exercises"
					/>

					<Card
						link="/webapps/iwdap"
						heading="Introduction to Web Development and Programming &rarr;"
						text="An online course where I have contributed as web developer and teaching assistant"
					/>
			
			</div>

		</Layout>
  )
}
