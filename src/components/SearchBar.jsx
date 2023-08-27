import React, { useState } from 'react';
import '../styles/style.css';

const SearchBar = ({ onSearch, noMealsFound, showValidation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      onSearch(''); 
    } else {
      onSearch(searchTerm);
    }
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
      {showValidation && <p className='validation-message'>Type something.</p>}
      {noMealsFound && !showValidation && <p className='validation-message'>No such meals found. Please, try again.</p>}
    </div>
  );
};

export default SearchBar;
