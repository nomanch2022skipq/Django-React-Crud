import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'

export const Logout = () => {

  const naviaget = useNavigate()


  useEffect(() => {
    secureLocalStorage.clear()
    return naviaget('/login')
  })

    
  return (
    <div></div>
  )
}
