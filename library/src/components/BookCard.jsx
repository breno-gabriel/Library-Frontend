import formatCurrencyBRL from '@/utils';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate, useOutletContext } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import BookDetailsButton from './BookDetailButton';

const BookCard = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleBookClick = (id) => {
    navigate(`/book-details/${id}`);
  };

  const placeholderImage = "src/img/capa_ilustrativa.png";

  return (
    <div 
      onClick={() => handleBookClick(book.id)} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      className='max-w-48 p-3 cursor-pointer flex flex-col gap-3 items-center rounded z-10 transform transition-transform duration-300 hover:scale-105 relative'
    >
      {isHovered && (
        <div className='absolute top-2 right-0'>
          <DeleteButton content={<FaTrashAlt />} id = {book.id} />
        </div>
      )}
      <div>
        <img src={book.image ? book.image : placeholderImage} alt={book.title} />
      </div>
      <div className='flex flex-col gap-y-3'>
        <h3 className='text-center font-semibold text-xl'>{book.title}</h3>
        <p className='text-center font-light text-lg'>{book.author}</p>
        <p className='text-center font-light text-lg'>{book.publisher}</p>
        <p className='text-center font-bold text-lg text-green-400'>{formatCurrencyBRL(book.price)}</p>
      </div>
      <BookDetailsButton />
    </div>
  );
};

export default BookCard;
