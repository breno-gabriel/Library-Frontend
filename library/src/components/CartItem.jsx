import React from 'react';

const CartItem = ({ id, title, price, image }) => {
  return (
    <div className='flex gap-4 mb-4'>
      <img className='w-16 h-20 object-cover' src={image} alt={title} />
      <div className='flex flex-col justify-between'>
        <h4 className='text-gray-700'>{title}</h4>
        <p className='text-gray-500'>{`R$ ${price.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
