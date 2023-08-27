import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Header = () => {

  return (
    <header className='header'>
        <Link to="/" className='header-logo'>
            The Meal
        </Link>
    </header>
  );
};

export default Header;
