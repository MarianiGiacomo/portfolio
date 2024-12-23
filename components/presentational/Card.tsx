import Link from 'next/link';
import { BasicComponent } from '../ComponentTypes';

type CardProps = BasicComponent & {
  link: string;
  heading: string;
  text?: string;
  classes?: string;
};

const Card: React.FC<CardProps> = ({ link, heading, text, classes }) => {
  return (
    <Link
      href={link}
      className={`m-2 block overflow-auto rounded-md border-2 border-solid border-marine p-2 sm:w-2/5 ${classes ?? ''}`}
    >
      <h2 className='font-medium'>{heading} &rarr;</h2>
      <p className='font-light'>{text}</p>
    </Link>
  );
};

export default Card;
