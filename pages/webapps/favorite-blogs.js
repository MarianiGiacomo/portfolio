import Layout from '../../components/layout'

export default function FavoriteBlogs() {
	return ( 
		<Layout>
			<img 
				width="1215" 
				height="810" 
				src="https://favoriteblogs.herokuapp.com//card.jpg"
				className="rounded-lg border-2 mb-5"
			/>
			<h1 className="text-2xl font-medium mb-1">Favorite Blogs</h1>
			<p className="mb-2">
				Initially I developed this application when I took the 
				<a href="https://fullstackopen.com/">Full Stack Open</a>course.
				I keep maintaining and updating it and added some extra features
				not present in the original verison.
			</p>
			<h2 className="text-xl font-medium mb-1">Technologies</h2>
			<p className="mb-1"><span className="font-medium">Frontend</span>: React</p>
			<p className="mb-1"><span className="font-medium">Backend</span>:
			Node, Express, MongoDB</p>
			<h2>Link</h2>
		</Layout>
	)

}