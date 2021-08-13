import Layout from '../../components/layout'
import WebApp from '../../components/webapp'
import data from '../../data/webapps/iwdap'

export default function Iwdap() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
