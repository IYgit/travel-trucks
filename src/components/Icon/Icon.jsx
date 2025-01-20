import sprite from '../../img/icons/sprite.svg';

const Icon = ({
  onClick,
  id,
  fill = 'none',  
  size = '24px',  
  className = '', 
  stroke = 'none', 
  ...props
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={size}
      height={size}
      fill={fill}    
      stroke={stroke} 
      {...props}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
