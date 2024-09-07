import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import formatCurrencyBRL from '../utils/formatCurrency';
import AddCartButton from './AddCartButton';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const { handleAddToCart } = useOutletContext();

  const handleBookClick = (id) => {
    navigate(`/purchase/book-details/${id}`);
  };

  const placeholderImage = "src/img/capa_ilustrativa.png";

  return (
    <div onClick={() => handleBookClick(book.id)} className='max-w-48 p-3 cursor-pointer flex flex-col gap-3 items-center rounded z-10 transform transition-transform duration-300 hover:scale-105'>
      <div>
        <img src={book.image ? book.image : placeholderImage} alt={book.title} />
      </div>
      <div className='flex flex-col gap-y-3'>
        <h3 className='text-center font-semibold text-xl'>{book.title}</h3>
        <p className='text-center font-light text-lg'>{book.author}</p>
        <p className='text-center font-light text-lg'>{book.publisher}</p>
        <p className='text-center font-bold text-lg text-green-400'>{formatCurrencyBRL(book.price)}</p>
      </div>
      <AddCartButton book={book} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default BookCard;
