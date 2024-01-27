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
        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/my-recipes-logo.png" height={150} alt="" />
      </div>
      <div className='links'>
        
      { isLoggedIn && [
        <NavLink key="home" to='/'>Home</NavLink>,
        <NavLink key="form" to='/form'>Add Products</NavLink>
      ]}

        { !isLoggedIn && <NavLink to='/register'>Register</NavLink>}
        
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
