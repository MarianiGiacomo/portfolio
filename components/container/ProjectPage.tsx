
import React from 'react'
import Layout from './Layout'
import WebApp from './Webapp'
import { BasicComponent, ComponentWithData } from '../ComponentTypes'

type ProjectPageProps = BasicComponent & ComponentWithData

const ProjectPage: React.FC<ProjectPageProps> = ({ data }: ProjectPageProps) => {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}

export default ProjectPage