import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data/projects/favorite-blogs'

export default function FavoriteBlogs() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
