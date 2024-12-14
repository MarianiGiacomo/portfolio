import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data/projects/jsav-player'

export default function JsavPlayer() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
