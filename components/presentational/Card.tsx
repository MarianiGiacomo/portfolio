import Link from 'next/link'
import { BasicComponent } from '../ComponentTypes';

type CardProps = BasicComponent & {
    link: URL,
    heading: string,
    text: string,
    classes?: string
}

const Card: React.FC<CardProps> = ({link, heading, text, classes}) => {
	return (
        (<Link
            href={link}
            className={`sm:w-2/5 block m-2 p-2 border-solid border-2 rounded-md overflow-scroll border-marine ${classes?? ''}`}>

            <h2 className="font-medium">{heading} &rarr;</h2>
            <p className="font-light">{text}</p>

        </Link>)
    );
}

export default Card