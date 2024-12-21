import data from '../../data/projects/accessible-modal'
import { NextPageWithLayout } from '../_app'
import Layout from '../../components/container/Layout'
import WebApp from '../../components/presentational/Webapp'

const AccessibleModalPage: NextPageWithLayout = () => <WebApp data={data} />

AccessibleModalPage.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}
export default AccessibleModalPage
