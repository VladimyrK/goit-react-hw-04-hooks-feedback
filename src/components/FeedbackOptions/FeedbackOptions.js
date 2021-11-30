import PropTypes from 'prop-types';

import './FeedbackOptions.module.css';

const FeedbackOptions = ({ options }) => {
  return (
    <>
      {options.map(({ id, name, func }) => (
        <button key={id} onClick={func} name={name}>
          {name}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      func: PropTypes.func,
    }),
  ),
};
