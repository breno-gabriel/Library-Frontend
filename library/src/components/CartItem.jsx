import React from 'react';
import formatCurrencyBRL from '../utils/formatCurrency';

const CartItem = ({ id, title, price, image }) => {
  const placeholderImage = "src/img/capa_ilustrativa.png";

  return (
    <div className='flex gap-2 p-4 border-2 border-b-slate-400 items-center'>
      <img src={image || placeholderImage} alt={title} className='w-12 h-16 object-cover' />
      <div className='flex flex-col'>
        <span>{title}</span>
        <span>{formatCurrencyBRL(price)}</span>
      </div>
    </div>
  );
};

export default CartItem;
