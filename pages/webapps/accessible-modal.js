import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data/webapps/accessible-modal'

export default function AccessibleModal() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
