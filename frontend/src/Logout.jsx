import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Logout = () => {

  const naviaget = useNavigate()


  useEffect(() => {
  localStorage.clear()
  return naviaget('/login')
  })

    
  return (
    <div></div>
  )
}
