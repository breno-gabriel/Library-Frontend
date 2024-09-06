import React from 'react';

const BookCard = ({ book }) => {
  const formatCurrencyBRL = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const placeholderImage = "src/img/capa_ilustrativa.png";

  return (
    <div className='max-w-48 p-3 cursor-pointer flex flex-col gap-3 items-center rounded z-10 
    transform transition-transform duration-300 hover:scale-105'>
      <div>
        <img src={book.image ? book.image : placeholderImage} alt="Imagem de um livro" />
      </div>
      <div className='flex flex-col gap-y-3'>
        <h3 className='text-center font-semibold text-xl'>{book.title}</h3>
        <p className='text-center font-light text-lg'>{book.author}</p>
        <p className='text-center font-light text-lg'>{book.publisher}</p>
        <p className='text-center font-bold text-lg text-green-400'>{formatCurrencyBRL(book.price)}</p>
      </div>
      <button className='border-2 border-orange-500 w-44 text-orange-500'>Adicionar ao carrinho</button>
    </div>
  );
};

export default BookCard;
