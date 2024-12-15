import Layout from '../../components/container/Layout'
import WebApp from '../../components/container/Webapp'
import data from '../../data/projects/jsav-player'

export default function JsavPlayer() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
