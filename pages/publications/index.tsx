import { ReactElement } from 'react'
import Layout from '../../components/container/Layout'

import data from '../../data'
import { boldName } from '../../helpers'

export default (): ReactElement => {
	const { firstName, lastName, publications }  = { ...data }
	return ( 
		<Layout>
			<h1 className="text-2xl font-medium mb-1 mt-4" >Publications</h1>
			<p className="mt-3">
				{ publications.intro }
			</p>
			<ul>
					{
						publications.articles.map( (p, i) => {
							return (
								<li key={i} className="mt-3">
									<a href={p.url.href} target="_blank" rel="noopener noreferrer">
										{ boldName(p.title, firstName, lastName)}
									</a>
								</li>
							)
						})
					}
			</ul>
		</Layout>
	)
}