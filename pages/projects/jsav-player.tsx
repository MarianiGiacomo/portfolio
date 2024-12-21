import Layout from '../../components/container/Layout'
import WebApp from '../../components/presentational/Webapp'
import data from '../../data/projects/jsav-player'
import { NextPageWithLayout } from '../_app'

const JsavPlayerPage: NextPageWithLayout = () => <WebApp data={data} />

JsavPlayerPage.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}
export default JsavPlayerPage