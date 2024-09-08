import React from 'react'
import Header from '../components/Header'
import Books from '../components/BooksExibition'
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookPurchasePage = () => {

  const [books, setBook] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get('http://localhost:3000/books');
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
        <Books books={books}/>
    </div>
  )
}

export default BookPurchasePage
