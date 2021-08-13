import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = `Giacomo's Web Portfolio`

export default function Layout({ children, home }) {
  return (
		<div className="container">
      <Head>
        <link rel="icon" href="/favicon.png" />
				<title>{siteTitle}</title>
        <meta name="description" content="Giacomo Mariani's web development portfolio" />
        <meta property="og:image" content={"/images/card.jpg"}/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content={"/images/card.jpg"} />
      </Head>
			
			<header className="flex flex-wrap gap-5 m-3">
				<Link href="/">
					<a>Home</a>
				</Link>
				<a href="https://giacomo-mariani.medium.com/" 
					target="_blank" 
					rel="noopener noreferrer"
					>Blog
				</a>
				<Link href="/publications">
					<a>Publications</a>
				</Link>
			</header>
      
			<main className="m-3">{children}</main>
      {!home && (
				<div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

			<footer className="flex flex-wrap gap-3 m-3 mb-5 absolute bottom-0">
				<a 
					href="https://github.com/MarianiGiacomo"
					target="_blank" 
					rel="noopener noreferrer"
					>GitHub
				</a>
				<a 
					href="https://www.linkedin.com/in/giacomo-mariani/"
					target="_blank" 
					rel="noopener noreferrer"
					>Linkedin
				</a>
				<a 
					href="https://www.twitter.com/@jamomani"
					target="_blank" 
					rel="noopener noreferrer"
					>Twitter
				</a>
				<a href="mailto:giacomo.mariani@gmail.com">Email</a>
			</footer>
    </div>
  )
}
