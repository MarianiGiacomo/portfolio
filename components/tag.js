import PropTypes from 'prop-types'

const Tag = props => {
	return (
		<span 
		className="border-2 rounded-full py-1 px-2 bg-opacity-25 bg-gradient-to-l from-green-100 m-0.5"
		>
			{props.text}
		</span>
	)
}

Tag.propTypes = {
	text: PropTypes.string.isRequired
}

export default Tag
