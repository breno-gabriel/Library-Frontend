import React from 'react';
import BookCard from './BookCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BooksExibition = ({books}) => {

  return (
    <div className='pt-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksExibition;
