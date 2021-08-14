import Layout from '../../components/container/layout'
import Anchor from '../../components/presentational/anchor'
import data from '../../data/publications'

export default function Publications() {
	return ( 
		<Layout>
			<h1 className="text-2xl font-medium mb-1 mt-4" >Publications</h1>
			<p className="mt-3">
				I am a doctoral student at the Computer Science department of Aalto University. Here are my academic publications.
			</p>
			<ul>
					{
						data.map( (p, i) => {
							return (
								<div key={i} className="mt-3">
								<li>
									<Anchor href={p.url} newWindow>
										{ boldName(p.title, 'Giacomo', 'Mariani')}
									</Anchor>
								</li>
								</div>
							)
						})
					}
			</ul>
		</Layout>
	)
}

function boldName(text, firstName, lastName){
	if(text.includes(`${firstName} ${lastName}`)) {
		return (
		<> 
			{text.split(`${firstName} ${lastName}`)[0]} <b>{`${firstName} ${lastName}`}</b> {text.split(`${firstName} ${lastName}`)[1]}
		</>
		)
	} else if(text.includes(`${lastName} ${firstName}`)) {
		return (
		<> 
			{text.split(`${lastName} ${firstName}`)[0]} <b>{`${lastName} ${firstName}`}</b> {text.split(`${lastName} ${firstName}`)[1]}
		</>
		)
	} else	if(text.includes(`${firstName}, ${lastName}`)) {
		return (
		<> 
			{text.split(`${firstName}, ${lastName}`)[0]} <b>{`${firstName}, ${lastName}`}</b> {text.split(`${firstName}, ${lastName}`)[1]}
		</>
		)
	} else if(text.includes(`${lastName}, ${firstName}`)) {
		return (
		<> 
			{text.split(`${lastName}, ${firstName}`)[0]} <b>{`${lastName}, ${firstName}`}</b> {text.split(`${lastName}, ${firstName}`)[1]}
		</>
		)
	}
}