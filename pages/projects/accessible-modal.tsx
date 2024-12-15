import { ReactNode } from 'react'
import Layout from '../../components/container/Layout'
import WebApp from '../../components/container/Webapp'
import data from '../../data/projects/accessible-modal'
import { BasicComponent } from '../../components/ComponentTypes'

type AccessibleModalProps = BasicComponent

export const AccessibleModal: React.FC<AccessibleModalProps> = () => {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
