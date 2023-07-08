import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, clickHandler }) {
  const base =
    'text-sm bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus-ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-sm',
    secondary:
      'text-sm inline-block rounded-full border-2 border-stone-400 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus-ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5'
  };
  if (to)
    return (
      <Link
        to={to}
        className={styles[type]}
      >
        {children}
      </Link>
    );

  if (clickHandler) {
    return (
      <button
        className={styles[type]}
        disabled={disabled}
        onClick={clickHandler}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={styles[type]}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
