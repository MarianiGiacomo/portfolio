import Layout from '../../components/layout'
import WebApp from '../../components/webapp'
import data from '../../data/webapps/jsav-player'

export default function JsavPlayer() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
