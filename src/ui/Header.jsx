import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <p>Ahmed</p>
      <SearchOrder />
    </header>
  );
}

export default Header;
