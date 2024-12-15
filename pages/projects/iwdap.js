import Layout from '../../components/container/Layout'
import WebApp from '../../components/container/Webapp'
import data from '../../data/projects/iwdap'

export default function Iwdap() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
