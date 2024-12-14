import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data//zlib-pump'

export default function ZlibPump() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
