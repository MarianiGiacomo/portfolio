import Layout from '../../components/container/Layout'
import WebApp from '../../components/container/Webapp'
import data from '../../data/projects/favorite-blogs'

export default function FavoriteBlogs() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
