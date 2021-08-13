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
					<a className="text-blue-600">Home</a>
				</Link>
				<a href="https://giacomo-mariani.medium.com/" 
					target="_blank" 
					rel="noopener noreferrer"
					className="text-blue-600"
					>Blog
				</a>
				<Link href="/publications">
					<a className="text-blue-600">Publications</a>
				</Link>
			</header>
      
			<main className="m-3">{children}</main>
      {!home && (
				<div className="mt-20">
          <Link href="/">
            <a className="text-blue-600">← Back to home</a>
          </Link>
        </div>
      )}

			<footer className="flex flex-wrap gap-3 m-3 mb-5 mt-5 bottom-0">
				<a 
					href="https://github.com/MarianiGiacomo"
					target="_blank" 
					rel="noopener noreferrer"
					className="text-blue-600 visited:text-purple-600 underline"
					>GitHub
				</a>
				<a 
					href="https://www.linkedin.com/in/giacomo-mariani/"
					target="_blank" 
					rel="noopener noreferrer"
					className="text-blue-600 visited:text-purple-600 underline"
					>Linkedin
				</a>
				<a 
					href="https://www.twitter.com/@jamomani"
					target="_blank" 
					rel="noopener noreferrer"
					className="text-blue-600 visited:text-purple-600 underline"
					>Twitter
				</a>
				<a 
					href="mailto:giacomo.mariani@gmail.com"
					className="text-blue-600 visited:text-purple-600 underline"
				>Email</a>
			</footer>
    </div>
  )
}
