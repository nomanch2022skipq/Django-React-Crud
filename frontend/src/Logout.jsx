import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Logout = () => {

  const naviaget = useNavigate()

  localStorage.clear()

  useEffect(() => {
    return naviaget('/login')
  })

    
  return (
    <div></div>
  )
}
