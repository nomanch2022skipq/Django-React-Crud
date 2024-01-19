import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {

    if (localStorage.getItem('access_token') === null) {
        window.location.href = '/login'
      }

    if (localStorage.getItem('access_token') !== null) {
        window.location.href = '/'
      }

    
  return (
    <div></div>
  )
}
