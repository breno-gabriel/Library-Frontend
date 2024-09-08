import React from 'react';
import CartItem from './CartItem';
import deleteBook from '@/utils/deleteBook';

const Cart = ({ purchaseBooks, setCart, setPurchaseBooks, setPurchaseConclusion }) => {
  const total = purchaseBooks.reduce((sum, book) => sum + book.price, 0);

  const handleConcluirCompra = () => {

    purchaseBooks.map((book) => {

      deleteBook(book.id);

    })
    setPurchaseBooks([]);
    setPurchaseConclusion(true);

  }

  return (
    <div
      onMouseOver={() => setCart(true)}
      onMouseOut={() => setCart(false)}
      className='mt-32 bg-white rounded-xl p-4 z-30 right-10 fixed w-64 shadow-lg'
    >
      <div className='max-h-64 overflow-y-auto'>
        {purchaseBooks.map((book, index) => (
          <CartItem key={index} id={book.id} title={book.title} price={book.price} image={book.image} />
        ))}
      </div>
      <div className='flex flex-col gap-6 mt-4'>
        <div className='flex justify-between'>
          <p>Total a pagar</p>
          <p>{`R$ ${total.toFixed(2)}`}</p>
        </div>
        <div className='flex justify-center'>
          <button onClick={handleConcluirCompra} className='border-2 border-green-300 w-44 text-white bg-green-400 rounded h-12'>Concluir compra</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
