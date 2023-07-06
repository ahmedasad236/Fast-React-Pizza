import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/order/${searchQuery}`);
    setSearchQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search of order #"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='w-28 rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yello-500 focus:ring-opacity-50'
      />
    </form>
  );
}

export default SearchOrder;
