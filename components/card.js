import Link from 'next/link'

export const Card = ({link, heading, text}) => {
	return (
		<Link href={link}>
			<a className="w-2/5 p-2 border-solid border-2 rounded-md overflow-scroll" >
				<h2 className="font-medium">{heading}</h2>
				<p className="font-light">{text}</p>
			</a>
		</Link>
	)
}