import React from 'react'
import Layout from '../../components/container/Layout'
import WebApp from '../../components/container/Webapp'
import data from '../../data/projects/favorite-blogs'

const FavoriteBlogs: React.FC = () => {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)
}

export default FavoriteBlogs
