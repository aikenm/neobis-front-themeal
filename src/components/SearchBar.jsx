import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm); 
  };

  return (
    <div className='find-block'>
      <h2 className='find-title'>Find your Meal</h2>
      <div className='find-search-row'>
        <input
          type="text"
          placeholder="Find your meal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='find-search-input'
        />
        <button onClick={handleSearch} className='find-search-button'>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
