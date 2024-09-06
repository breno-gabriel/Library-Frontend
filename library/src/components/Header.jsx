import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='flex justify-between px-28 bg-green-300 w-full fixed'>
      <div className='flex gap-4 items-center'>
        <FaBookOpenReader className='text-8xl text-white my-10'/>
        <h3 className='text-white text-4xl'>BookParadise</h3>
      </div>
        <button><FaShoppingCart className='text-6xl text-white'/></button>
    </header>
  )
}

export default Header
