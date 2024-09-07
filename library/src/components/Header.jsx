import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBookOpenReader } from 'react-icons/fa6';



const Header = ({cart, setCart}) => {

  return (
    <header className='flex justify-between px-4 sm:px-6 md:px-10 lg:px-28 bg-green-300 w-full fixed z-20'>
      <div className='flex gap-2 sm:gap-4 items-center'>
        <FaBookOpenReader className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white my-4 sm:my-6 md:my-8 lg:my-10' />
        <h3 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>BookParadise</h3>
      </div>
      <button>
          <FaShoppingCart onMouseOver={() => setCart(true)} onMouseOut={() => setCart(false)} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white' />
      </button>   
    </header>
  );
};

export default Header;
