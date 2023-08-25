import React, { useState } from 'react';
import '../styles/style.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showValidation, setShowValidation] = useState(false); 

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setShowValidation(true); 
    } else {
      setShowValidation(false); 
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
    </div>
  );
};

export default SearchBar;
