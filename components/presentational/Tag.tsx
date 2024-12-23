import PropTypes from 'prop-types';
import { BasicComponent } from '../ComponentTypes';

type TagProps = BasicComponent & {
  text: string;
};

const Tag: React.FC<TagProps> = (props) => {
  return (
    <span className='m-0.5 rounded-full border border-marine px-2 py-1'>
      {props.text}
    </span>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
