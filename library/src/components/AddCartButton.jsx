import React from 'react';

const AddCartButton = ({ book, handleAddToCart }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    handleAddToCart(book);
  };

  return (
    <button 
      onClick={handleClick} 
      className='border-2 border-orange-500 w-44 text-orange-500'>
      Adicionar ao carrinho
    </button>
  );
};

export default AddCartButton;
