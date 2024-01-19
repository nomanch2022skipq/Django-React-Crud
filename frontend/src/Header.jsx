import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
        
        <div>
        <h1>hello</h1>
        </div>
        
        <div className='links'>

          <a href='/'>Home</a>
          <a href='/form'>Add Products</a>
          <a href='/login'>Login</a>
          <a href='/logout'>Logout</a>
          {/* <NavLink to='/'>Home</NavLink>e */}
          {/* <Link to={'/form'}>Add Products</Link> */}

          <NavLink to="/">Home</NavLink>
        
        </div>



        
      
    </div>
  )
}

export default Header