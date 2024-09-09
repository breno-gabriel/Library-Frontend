import React from 'react'
import Header from '../components/Header'
import BooksExibition from '../components/BooksExibition'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useOutletContext, useParams } from 'react-router-dom';

const Home = () => {

  const [books, setBook] = useState([]);
  const { setUpdateForms, updateBook, updateForms, setAdvice, advice, setMessage } = useOutletContext();


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
  }, [books]);

  return (
    <div>
        <BooksExibition books={books} setAdvice = {setAdvice} advice = {advice} setMessage = {setMessage}/>
    </div>
  )
}

export default Home
