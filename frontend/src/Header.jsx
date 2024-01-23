import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!secureLocalStorage.getItem('access_token'));

  useEffect(() => {
    const token = secureLocalStorage.getItem('access_token');
    setIsLoggedIn(!!token);
  }, [secureLocalStorage.getItem('access_token')]);

  return (
    <div className='header'>
      <div>
        <h1>hello</h1>
      </div>
      <div className='links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/form'>Add Products</NavLink>
        {isLoggedIn ? (
          <NavLink to='/logout'>Logout</NavLink>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
