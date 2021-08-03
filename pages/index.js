import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
		<Layout home>
			<Head>
        <title>{siteTitle}</title>
      </Head>
		
			<section className={utilStyles.headingMd}>
        <p>Hi, I am Giacomo!</p>
        <p>
				This is my web development portfolio. Here you can see some of my projects and blog posts.
        </p>
      </section>

			{/* <div className={styles.container}> */}

				{/* <main className={styles.main}> */}
					{/* <h1 className={styles.title}>
						Hi, I am Giacomo!
					</h1> */}
					{/* <Image 
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={'Giacomo Mariani'}
					/> */}
					{/* <p className={styles.description}>
						This is my web development portfolio. Here you can see some of my projects and blog posts.
					</p> */}

					{/* <div>
						<Image 
							src="/images/banner.jpg"
							width="960"
							height="640"
							alt="Banner image"
						/>
						<p>Photo by 
							<a href="https://unsplash.com/@halacious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								HalGatewood.com
							</a> on 
							<a href="https://unsplash.com/s/photos/portfolio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</p>
					</div> */}

					<div className={styles.grid}>
						<Link href="webapps/favorite-blogs">
							<a className={styles.card} >
								<h2>Favorite Blogs web app &rarr;</h2>
								<p>A web application to save and share your favorite blogs</p>
							</a>
						</Link>

						<a href="https://nextjs.org/learn" className={styles.card}>
							<h2>Learn &rarr;</h2>
							<p>Learn about Next.js in an interactive course with quizzes!</p>
						</a>

						<a
							href="https://github.com/vercel/next.js/tree/master/examples"
							className={styles.card}
						>
							<h2>Examples &rarr;</h2>
							<p>Discover and deploy boilerplate example Next.js projects.</p>
						</a>

						<a
							href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							className={styles.card}
						>
							<h2>Deploy &rarr;</h2>
							<p>
								Instantly deploy your Next.js site to a public URL with Vercel.
							</p>
						</a>
					</div>
				{/* </main> */}

			{/* </div> */}
		</Layout>
  )
}
