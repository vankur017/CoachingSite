import React from 'react'
import logo from '../../logo.jpeg'
const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt='Not Rendered'></img>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            
        </ul>
      </div>
    </div>
  )
}

export default Header
