import PropTypes from 'prop-types'
import Tag from './tag'

const WebApp = ({ data }) => {
	return (
		<>
			<img 
				width={data.img.width} 
				height={data.img.height} 
				src={data.img.src}
				alt={data.img.alt}
				className="rounded-lg border-2 mb-5"
			/>
			<h1 className="text-2xl font-medium mb-1 mt-4">{data.title}</h1>
			<p className="mb-2">{data.intro}</p>
			<h2 className="text-xl font-medium mb-1 mt-4">Technologies</h2>
			{
				data.technologies?.frontend?	
				<p className="mb-2 mt-4">
					<span className="font-medium">Frontend</span>:&nbsp;
					{data.technologies.frontend.map( (t, i) => <Tag key={i} text={t} />)}	
				</p>
				: ''
			}
			{
				data.technologies?.backend?	
				<p className="mb-2 mt-3">
					<span className="font-medium">Backend</span>:&nbsp;
					{data.technologies.backend.map( (t, i) => <Tag key={i} text={t} />)}	
				</p>
				: ''
			}
			{
				data.links? 
					(
						<>
							<h2 className="text-xl font-medium mb-1 mt-4" >Links</h2>
							<ol>
							{ 
								Object.entries(data.links).map((l, i) => {
									return <li key={i} >
										{l[0]}:&nbsp;
										<a 
											href={l[1]}
											target="_blank" 
											rel="noopener noreferrer"
											className="text-blue-600 visited:text-purple-600 underline"
										>
											{l[1]}
										</a>
										</li>
								})
							}
							</ol>
						</>
					) 
					: '' 
			}
		</>
	)
}

WebApp.propTypes = {
	data: PropTypes.object.isRequired
}

export default WebApp
