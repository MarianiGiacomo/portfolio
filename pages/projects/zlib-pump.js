import Layout from '../../components/container/Layout'
import WebApp from '../../components/container/Webapp'
import data from '../../data//zlib-pump'

export default function ZlibPump() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
