import React from 'react'
import Logo from '../img/reactjs-icon.svg'
 function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-item'>
        <img src={Logo} alt='Loading' className='Logo'></img>
        <h1 className='heading'>
          ReactFacts
        </h1>
        </div>
        <h3 className='heading-1'>React Course - Project 1</h3>
      
    </div>
  )
}
export default Navbar;