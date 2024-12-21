import Layout from '../../components/container/Layout'
import WebApp from '../../components/container/Webapp'
import data from '../../data/projects/iwdap'

const Iwdap: React.FC = () => {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}

export default Iwdap