import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data/projects/portfolio'

export default function Iwdap() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
