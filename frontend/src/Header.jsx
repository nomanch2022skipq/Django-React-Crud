import React, {useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'



function Header() {
  

  return (
    <div className='header'>
        
        <div>
        <h1>hello</h1>
        </div>
        
        <div className='links'>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/form'>Add Products</NavLink>

        {localStorage.getItem('access_token') === null ? 
        <NavLink to='/login'>Login</NavLink> 
        :
        <NavLink to='/logout'>Logout</NavLink>}
       
        {/* <Link to={'/form'}>Add Products</Link> */}

        
        
          
        
        </div>



        
      
    </div>
  )
}

export default Header