import Head from 'next/head'
import Image from 'next/image'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = ''
export const siteTitle = `Giacomo's Web Portfolio`

export default function Layout({ children, home }) {
  return (
    // <div className={styles.container}>
		<div className="container">
      <Head>
        <link rel="icon" href="/favicon.png" />
				<title>{siteTitle}</title>
        <meta name="description" content="Giacomo Mariani's web development portfolio" />
        <meta property="og:image" content={"/images/card.jpg"}/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content={"/images/card.jpg"} />
      </Head>
      {/* <header className={styles.header}> */}
			<header>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              // className={utilStyles.borderCircle}
              height={144}
              width={110}
              alt={name}
            />
            {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
            <h1 className="">{name}</h1>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      {/* <main className={styles.main}>{children}</main> */}
      <main className="">{children}</main>
      {!home && (
        // <div className={styles.backToHome}>
				<div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
