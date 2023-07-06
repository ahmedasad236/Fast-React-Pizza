import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classes = 'text-sm text-blue-500 hover:text-blue-500 hover:underline';

  if (to === '-1')
    return (
      <button
        className={classes}
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    );

  return (
    <Link
      className={classes}
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
