import Layout from '../../components/layout'
import WebApp from '../../components/webapp'
import data from '../../data/webapps/zlib-pump'

export default function ZlibPump() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
