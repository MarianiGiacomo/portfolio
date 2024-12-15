
import Layout from '../../components/container/Layout'
import Card from '../../components/presentational/Card'
import Tag from '../../components/presentational/Tag'
import { extractUniqueTech } from '../../helpers'

import data from '../../data'
import { boldName } from '../../helpers'

export default function Projects() {
	const { firstName, lastName, home, profileImg, webApps } = { ...data }

  return (
		<Layout home>
			<section>
				<h2 className="text-xl font-medium mb-1 mt-3 text-center">Personal Projects</h2>
				<div className="sm:flex sm:flex-wrap gap-5 justify-between mt-8 mb-5 mr-auto ml-auto w-11/12">
					{
						Object.entries(webApps).map( (e, i) => {		
							return <Card 
								link={ `/projects/${e[0]}` }
								heading={e[1].title?? ''}
								text={e[1].short?? ''}
								key={i}
							/>
						})
					}
				</div>
			</section>
			
			<section>
				<h2 className="text-xl font-medium mb-1 mt-3 text-center">Technologies</h2>
				<div className="flex flex-wrap mb-10 mt-3">
					{ Array.from(extractUniqueTech(webApps)).concat('SQL').map( (t, i) => <Tag key={i} text={t} />)}
				</div>
			</section>

		</Layout>
  )

}