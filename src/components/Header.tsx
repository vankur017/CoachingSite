import React from 'react'
import logo from '../../logo.jpeg'
const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-5 bg-gray-200'>
        <img className='rounded-lg h-[5%] w-[100%]' src={logo} alt='Not Rendered'></img>
       
        </div>
      </div>
 
  )
}

export default Header
