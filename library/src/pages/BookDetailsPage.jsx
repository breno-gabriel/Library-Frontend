import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import AddCartButton from '@/components/AddCartButton';
import capaIlustrativa from '../img/capa_ilustrativa.png'; // Importando a imagem
import formatCurrencyBRL from '@/utils';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { handleAddToCart } = useOutletContext();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do livro:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='flex flex-col lg:flex-row pt-16 lg:pt-80 gap-8 lg:gap-20 px-4 lg:px-16'>
      <img
        className="w-full lg:w-1/2 h-auto object-cover"
        src={book.image || capaIlustrativa}
        alt={book.title}
      />
      <section className='flex flex-col gap-6 lg:gap-14'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl lg:text-4xl text-gray-600'>{book.title}</h2>
          <h3 className='text-gray-500 underline text-lg lg:text-xl'>{book.author}</h3>
        </div>
        <div className='flex flex-col gap-1 text-sm lg:text-base'>
          <p><span className='font-semibold'>Editora:</span> <span className='text-gray-500'>{book.publisher}</span></p>
          <p><span className='font-semibold'>Ano:</span> <span className='text-gray-500'>{book.year}</span></p>
          <p><span className='font-semibold'>Preço:</span> <span className='text-gray-500'>{formatCurrencyBRL(book.price)}</span></p>
          <p><span className='font-semibold'>Categoria:</span> <span className='text-gray-500'>{book.category}</span></p>
          <p><span className='font-semibold'>Vendedor:</span> <span className='text-gray-500'>{book.seller_name}</span></p>
          <p><span className='font-semibold'>Descrição:</span> <span className='text-gray-500'>{book.description}</span></p>
        </div>
        <AddCartButton book={book} handleAddToCart={handleAddToCart} />
      </section>
    </div>
  );
};

export default BookDetailsPage;
