import React from 'react';
import { Link } from 'react-router-dom';

const ButtonMailTo = ({ mailto, className,  label }) => {
  return (
    <Link to='#'
          className={className}
          onClick={(e) => {
            window.location = mailto;
            e.preventDefault();
          }}
     >
      {label}
     </Link>
  );
};

export default ButtonMailTo;
