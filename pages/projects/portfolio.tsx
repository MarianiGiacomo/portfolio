import Layout from '../../components/container/Layout'
import WebApp from '../../components/presentational/Webapp'
import data from '../../data/projects/portfolio'
import { NextPageWithLayout } from '../_app'

const PortfolioPage: NextPageWithLayout = () => <WebApp data={data} />

PortfolioPage.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}
export default PortfolioPage