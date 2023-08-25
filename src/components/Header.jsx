import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css';

const Header = () => {

const navigate = useNavigate();

  return (
    <header className='header'>
        <Link to="/" onClick={() => navigate('/')} className='logo-link'>
      <h1 className='header-logo'>The Meal</h1>
      </Link>
    </header>
  );
};

export default Header;
