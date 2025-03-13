import React from 'react'
import logo from '../../logo.jpeg'
const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-5 bg-gray-200'>
        <img className='rounded-lg h-[10%] w-[15%]' src={logo} alt='Not Rendered'></img>
        <div>
          <ul className='flex space-x-5'>
          
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
          
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
