import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const classes =
    'bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus-ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';

  if (to)
    return (
      <Link
        to={to}
        className={classes}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
