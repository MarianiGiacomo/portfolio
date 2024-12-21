import Layout from '../../components/container/Layout'
import WebApp from '../../components/container/Webapp'
import data from '../../data/projects/jsav-player'

const JsavPlayer: React.FC = () => {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}

export default JsavPlayer