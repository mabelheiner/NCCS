import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header style={{display: 'flex'}}>
        <img src='../src/assets/logo/newton-county-logo.png' alt='Newton Country Community Services Logo' />
        <NavBar />   
    </header>
  )
}

export default Header