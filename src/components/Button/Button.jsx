import PropTypes from 'prop-types';

const Button = ({ text, className, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  type: 'button', 
};

export default Button;
